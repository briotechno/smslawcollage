import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import bcrypt from "bcryptjs";

async function ensureTable(db: any) {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS students (
      id INT PRIMARY KEY AUTO_INCREMENT,
      programType VARCHAR(50),
      category VARCHAR(50),
      gender VARCHAR(20),
      disabilityType VARCHAR(255),
      consent BOOLEAN DEFAULT TRUE,
      firstName VARCHAR(100) NOT NULL,
      middleName VARCHAR(100),
      lastName VARCHAR(100) NOT NULL,
      enrollmentNumber VARCHAR(100) UNIQUE,
      studentType VARCHAR(50),
      abcId VARCHAR(100),
      hscRollNumber VARCHAR(100),
      email VARCHAR(100) UNIQUE NOT NULL,
      phone VARCHAR(20) NOT NULL,
      birthdate VARCHAR(20),
      addressLine1 VARCHAR(255),
      addressLine2 VARCHAR(255),
      state VARCHAR(100),
      district VARCHAR(100),
      pincode VARCHAR(20),
      password VARCHAR(255) NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Backwards compatibility for existing tables
  try { await db.execute("ALTER TABLE students ADD COLUMN programType VARCHAR(50)"); } catch (e: any) { if (e.code !== 'ER_DUP_FIELDNAME') console.error(e); }
  try { await db.execute("ALTER TABLE students ADD COLUMN category VARCHAR(50)"); } catch (e: any) { if (e.code !== 'ER_DUP_FIELDNAME') console.error(e); }
  try { await db.execute("ALTER TABLE students ADD COLUMN gender VARCHAR(20)"); } catch (e: any) { if (e.code !== 'ER_DUP_FIELDNAME') console.error(e); }
  try { await db.execute("ALTER TABLE students ADD COLUMN disabilityType VARCHAR(255)"); } catch (e: any) { if (e.code !== 'ER_DUP_FIELDNAME') console.error(e); }
  try { await db.execute("ALTER TABLE students ADD COLUMN consent BOOLEAN DEFAULT TRUE"); } catch (e: any) { if (e.code !== 'ER_DUP_FIELDNAME') console.error(e); }
  try { await db.execute("ALTER TABLE students MODIFY enrollmentNumber VARCHAR(100) NULL"); } catch (e: any) { console.error(e); }
  try { await db.execute("ALTER TABLE students ADD COLUMN middleName VARCHAR(100)"); } catch (e: any) { if (e.code !== 'ER_DUP_FIELDNAME') console.error(e); }
  try { await db.execute("ALTER TABLE students ADD COLUMN studentType VARCHAR(50)"); } catch (e: any) { if (e.code !== 'ER_DUP_FIELDNAME') console.error(e); }
}

export async function POST(request: Request) {
  let db;
  try {
    const data = await request.json();
    const {
      firstName, middleName, lastName, enrollmentNumber, abcId, hscRollNumber,
      email, phone, birthdate, addressLine1, addressLine2,
      state, district, pincode, password,
      programType, category, gender, disabilityType, consent, studentType
    } = data;

    if (!firstName || !lastName || !email || !password || !phone || !studentType) {
      return NextResponse.json({ success: false, error: "Missing required fields." }, { status: 400 });
    }

    if (studentType === "Old Student" && !enrollmentNumber) {
      return NextResponse.json({ success: false, error: "Enrollment Number is required for Old Students." }, { status: 400 });
    }

    db = await connectDB();
    await ensureTable(db);

    // Check if student already exists by email or enrollment number
    let existing;
    if (studentType === "Old Student" && enrollmentNumber) {
      const [res] = await db.execute(
        "SELECT id FROM students WHERE email = ? OR enrollmentNumber = ?",
        [email, enrollmentNumber]
      );
      existing = res;
    } else {
      const [res] = await db.execute(
        "SELECT id FROM students WHERE email = ?",
        [email]
      );
      existing = res;
    }

    if (Array.isArray(existing) && existing.length > 0) {
      return NextResponse.json({ success: false, error: "Email or Enrollment Number already registered." }, { status: 409 });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert student
    await db.execute(
      `INSERT INTO students (studentType, programType, category, gender, disabilityType, consent, firstName, middleName, lastName, enrollmentNumber, abcId, hscRollNumber, email, phone, birthdate, addressLine1, addressLine2, state, district, pincode, password) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [studentType, programType || null, category || null, gender || null, disabilityType || null, consent ? 1 : 0, firstName, middleName || null, lastName, studentType === "Old Student" ? enrollmentNumber : null, abcId, hscRollNumber, email, phone, birthdate, addressLine1, addressLine2, state, district, pincode, hashedPassword]
    );

    return NextResponse.json({ success: true, message: "Student registered successfully." }, { status: 201 });

  } catch (error: any) {
    console.error("Signup error:", error);
    return NextResponse.json({ success: false, error: "Failed to register student." }, { status: 500 });
  } finally {
    if (db) await db.end();
  }
}
