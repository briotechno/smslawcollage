import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "smslawcollage_secret";

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
    const { loginId, password } = data; // loginId can be enrollmentNumber or phone

    if (!loginId || !password) {
      return NextResponse.json({ success: false, error: "Missing login credentials." }, { status: 400 });
    }

    db = await connectDB();
    await ensureTable(db);

    // Find student
    const [rows] = await db.execute(
      "SELECT * FROM students WHERE enrollmentNumber = ? OR phone = ?",
      [loginId, loginId]
    );

    const students = rows as any[];
    if (students.length === 0) {
      return NextResponse.json({ success: false, error: "Invalid credentials. Student not found." }, { status: 401 });
    }

    const student = students[0];

    // Check password
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return NextResponse.json({ success: false, error: "Invalid credentials. Incorrect password." }, { status: 401 });
    }

    // Generate token
    const token = jwt.sign(
      { id: student.id, enrollmentNumber: student.enrollmentNumber, name: `${student.firstName} ${student.lastName}` },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    return NextResponse.json({ 
      success: true, 
      token, 
      student: {
        id: student.id,
        firstName: student.firstName,
        lastName: student.lastName,
        enrollmentNumber: student.enrollmentNumber
      }
    });

  } catch (error: any) {
    console.error("Login error:", error);
    return NextResponse.json({ success: false, error: "Failed to login." }, { status: 500 });
  } finally {
    if (db) await db.end();
  }
}
