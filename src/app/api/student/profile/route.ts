import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "smslawcollage_secret";

function verifyTokenFromRequest(request: Request) {
  const auth = request.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
  if (!token) return null;
  try {
    return jwt.verify(token, JWT_SECRET) as any;
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  let db;
  try {
    const decoded = verifyTokenFromRequest(request);
    if (!decoded || !decoded.id) {
      return NextResponse.json({ success: false, error: "Unauthorized access. Invalid or missing token." }, { status: 401 });
    }

    db = await connectDB();

    const [rows] = await db.execute(
      "SELECT id, firstName, lastName, enrollmentNumber, abcId, hscRollNumber, email, phone, birthdate, addressLine1, addressLine2, state, district, pincode FROM students WHERE id = ?",
      [decoded.id]
    );

    const students = rows as any[];
    if (students.length === 0) {
      return NextResponse.json({ success: false, error: "Student profile not found." }, { status: 404 });
    }

    return NextResponse.json({ success: true, student: students[0] });

  } catch (error: any) {
    console.error("Profile fetch error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch profile data." }, { status: 500 });
  } finally {
    if (db) await db.end();
  }
}
