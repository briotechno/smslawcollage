import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";

export async function GET(request: Request) {
  let db: any = null;
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "50", 10);
    const offset = (page - 1) * limit;

    db = await connectDB();

    const [tableExistsRows] = await db.execute("SHOW TABLES LIKE 'students'");
    if ((tableExistsRows as any[]).length === 0) {
       return NextResponse.json({ success: true, data: [], total: 0, page, limit });
    }

    const [countRows] = (await db.execute("SELECT COUNT(*) as count FROM students")) as any;
    const total = countRows[0].count;

    const [dataRows] = await db.execute(
      `SELECT id, studentType, programType, category, gender, disabilityType, firstName, middleName, lastName, enrollmentNumber, email, phone, abcId, hscRollNumber, state, district, createdAt FROM students ORDER BY createdAt DESC LIMIT ${limit} OFFSET ${offset}`
    );

    const students = dataRows as any[];

    return NextResponse.json({
      success: true,
      data: students,
      total,
      page,
      limit,
    });
  } catch (error: any) {
    console.error("Failed to fetch students:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch students data." }, { status: 500 });
  } finally {
    if (db) await db.end();
  }
}
