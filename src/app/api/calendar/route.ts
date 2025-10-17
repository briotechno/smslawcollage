
import { connectDB } from "@/lib/db";
import jwt from "jsonwebtoken";
import type { NextRequest } from "next/server";
import type { RowDataPacket, ResultSetHeader } from "mysql2";

const JWT_SECRET = process.env.JWT_SECRET || "smslawcollage_secret";

interface CalendarEvent extends RowDataPacket {
  id: number;
  title: string;
  description: string;
  date: string;
  color?: string;
  created_at?: string;
}

function verifyTokenFromRequest(request: NextRequest): any {
  const auth = request.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
  if (!token) return null;
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

async function ensureTable(db: any): Promise<void> {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS event (
      id INT PRIMARY KEY AUTO_INCREMENT,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      date VARCHAR(20) NOT NULL,
      color VARCHAR(20),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);
}

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    const db = await connectDB();
    await ensureTable(db);
    if (id) {
      const [rows]: [CalendarEvent[], any] = await db.execute("SELECT * FROM event WHERE id = ?", [id]);
      await db.end();
      if (!rows || rows.length === 0) {
        return Response.json({ success: false, message: "Event not found" }, { status: 404 });
      }
      return Response.json({ success: true, data: rows[0] }, { status: 200 });
    }
    const [rows]: [CalendarEvent[], any] = await db.execute("SELECT * FROM event ORDER BY date DESC, id DESC");
    await db.end();
    return Response.json({ success: true, data: rows }, { status: 200 });
  } catch (err) {
    return Response.json({ success: false, error: String(err) }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const user = verifyTokenFromRequest(request);
  if (!user) return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
  try {
    const body = await request.json();
    const { title = "", description = "", date = "", color = "" } = body;
    if (!title || !description || !date) {
      return Response.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }
    const db = await connectDB();
    await ensureTable(db);
    const [result]: [ResultSetHeader, any] = await db.execute(
      "INSERT INTO event (title, description, date, color) VALUES (?,?,?,?)",
      [title, description, date, color]
    );
    await db.end();
    return Response.json({ success: true, id: result.insertId, message: "Event created" }, { status: 201 });
  } catch (err) {
    return Response.json({ success: false, error: String(err) }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const user = verifyTokenFromRequest(request);
  if (!user) return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    if (!id) return Response.json({ success: false, message: "Missing id" }, { status: 400 });
    const body = await request.json();
    const { title = "", description = "", date = "", color = "" } = body;
    const db = await connectDB();
    await ensureTable(db);
    const [result]: [ResultSetHeader, any] = await db.execute(
      "UPDATE event SET title=?, description=?, date=?, color=? WHERE id=?",
      [title, description, date, color, id]
    );
    await db.end();
    return Response.json({ success: true, message: "Event updated" }, { status: 200 });
  } catch (err) {
    return Response.json({ success: false, error: String(err) }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const user = verifyTokenFromRequest(request);
  if (!user) return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    if (!id) return Response.json({ success: false, message: "Missing id" }, { status: 400 });
    const db = await connectDB();
    await ensureTable(db);
    const [result]: [ResultSetHeader, any] = await db.execute("DELETE FROM event WHERE id = ?", [id]);
    await db.end();
    return Response.json({ success: true, message: "Event deleted" }, { status: 200 });
  } catch (err) {
    return Response.json({ success: false, error: String(err) }, { status: 500 });
  }
}
