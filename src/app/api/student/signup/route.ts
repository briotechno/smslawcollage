import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import bcrypt from "bcryptjs";

async function ensureTable(db: any) {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS students (
      id INT PRIMARY KEY AUTO_INCREMENT,
      firstName VARCHAR(100) NOT NULL,
      lastName VARCHAR(100) NOT NULL,
      enrollmentNumber VARCHAR(100) UNIQUE NOT NULL,
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
}

export async function POST(request: Request) {
  let db;
  try {
    const data = await request.json();
    const {
      firstName, lastName, enrollmentNumber, abcId, hscRollNumber,
      email, phone, birthdate, addressLine1, addressLine2,
      state, district, pincode, password
    } = data;

    if (!firstName || !lastName || !enrollmentNumber || !email || !password || !phone) {
      return NextResponse.json({ success: false, error: "Missing required fields." }, { status: 400 });
    }

    db = await connectDB();
    await ensureTable(db);

    // Check if student already exists by email or enrollment number
    const [existing] = await db.execute(
      "SELECT id FROM students WHERE email = ? OR enrollmentNumber = ?",
      [email, enrollmentNumber]
    );

    if (Array.isArray(existing) && existing.length > 0) {
      return NextResponse.json({ success: false, error: "Email or Enrollment Number already registered." }, { status: 409 });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert student
    await db.execute(
      `INSERT INTO students (firstName, lastName, enrollmentNumber, abcId, hscRollNumber, email, phone, birthdate, addressLine1, addressLine2, state, district, pincode, password) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [firstName, lastName, enrollmentNumber, abcId, hscRollNumber, email, phone, birthdate, addressLine1, addressLine2, state, district, pincode, hashedPassword]
    );

    return NextResponse.json({ success: true, message: "Student registered successfully." }, { status: 201 });

  } catch (error: any) {
    console.error("Signup error:", error);
    return NextResponse.json({ success: false, error: "Failed to register student." }, { status: 500 });
  } finally {
    if (db) await db.end();
  }
}
