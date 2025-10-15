import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const start = Date.now();

  try {
    const conn = await connectDB();

    // Test query to verify connection
    const [rows] = (await (conn as any).query("SELECT 1 AS ok")) as any;

    // Close DB connection
    if (conn && typeof (conn as any).end === "function") await (conn as any).end();

    const ms = Date.now() - start;

    return NextResponse.json(
      {
        status: "ok",
        dbConnected: true,
        testQuery: rows?.[0] ?? null,
        message: "Database connection successful ✅",
        timeMs: ms,
      },
      { status: 200 }
    );
  } catch (err: any) {
    const ms = Date.now() - start;
    console.error("Database connection failed:", err);

    return NextResponse.json(
      {
        status: "error",
        dbConnected: false,
        message: "Database connection failed ❌",
        error: err?.message || String(err),
        timeMs: ms,
      },
      { status: 500 }
    );
  }
}
