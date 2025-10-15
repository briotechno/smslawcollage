import { connectDB } from "@/lib/db";
import { isEmpty } from "@/lib/validation";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "smslawcollage_secret";

function verifyTokenFromRequest(request) {
  const auth = request.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
  if (!token) return null;
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

async function ensureLegalAidTable(db) {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS legal_aid (
      id INT PRIMARY KEY AUTO_INCREMENT,
      date VARCHAR(50) NOT NULL,
      title VARCHAR(255) NOT NULL,
      excerpt TEXT NOT NULL,
      image TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);
}

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    const db = await connectDB();
    await ensureLegalAidTable(db);
    if (id) {
      const [rows] = await db.execute("SELECT * FROM legal_aid WHERE id = ?", [id]);
      await db.end();
      if (!rows || rows.length === 0) {
        return Response.json({ success: false, message: "Activity not found" }, { status: 404 });
      }
      return Response.json({ success: true, data: rows[0] }, { status: 200 });
    }
    const [rows] = await db.execute("SELECT * FROM legal_aid ORDER BY date DESC, id DESC");
    await db.end();
    return Response.json({ success: true, data: rows }, { status: 200 });
  } catch (err) {
    return Response.json({ success: false, error: String(err) }, { status: 500 });
  }
}

export async function POST(request) {
  const user = verifyTokenFromRequest(request);
  if (!user) {
    return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = await request.json();
    const { date = "", title = "", excerpt = "", image = "" } = body;
    const errors = {};
    if (isEmpty(date)) errors.date = "Date is required.";
    if (isEmpty(title)) errors.title = "Title is required.";
    if (isEmpty(excerpt)) errors.excerpt = "Excerpt is required.";
    if (Object.keys(errors).length > 0) {
      return Response.json({ success: false, errors, message: "Validation failed" }, { status: 400 });
    }
    const db = await connectDB();
    await ensureLegalAidTable(db);
    const [result] = await db.execute(
      "INSERT INTO legal_aid (date, title, excerpt, image) VALUES (?,?,?,?)",
      [date, title, excerpt, image]
    );
    await db.end();
    return Response.json({ success: true, id: result.insertId, message: "Activity created" }, { status: 201 });
  } catch (err) {
    return Response.json({ success: false, error: String(err) }, { status: 500 });
  }
}

export async function PUT(request) {
  const user = verifyTokenFromRequest(request);
  if (!user) {
    return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = await request.json();
    const { id } = body;
    if (!id) return Response.json({ success: false, message: "id is required" }, { status: 400 });
    const fields = [];
    const params = [];
    ["date", "title", "excerpt", "image"].forEach(f => {
      if (Object.prototype.hasOwnProperty.call(body, f)) {
        fields.push(`${f} = ?`);
        params.push(body[f]);
      }
    });
    if (fields.length === 0) return Response.json({ success: false, message: "No fields to update" }, { status: 400 });
    params.push(id);
    const db = await connectDB();
    await ensureLegalAidTable(db);
    const [result] = await db.execute(`UPDATE legal_aid SET ${fields.join(", ")} WHERE id = ?`, params);
    await db.end();
    return Response.json({ success: true, message: "Activity updated" }, { status: 200 });
  } catch (err) {
    return Response.json({ success: false, error: String(err) }, { status: 500 });
  }
}

export async function DELETE(request) {
  const user = verifyTokenFromRequest(request);
  if (!user) {
    return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    if (!id) return Response.json({ success: false, message: "id query param is required" }, { status: 400 });
    const db = await connectDB();
    await ensureLegalAidTable(db);
    const [result] = await db.execute("DELETE FROM legal_aid WHERE id = ?", [id]);
    await db.end();
    return Response.json({ success: true, message: "Activity deleted" }, { status: 200 });
  } catch (err) {
    return Response.json({ success: false, error: String(err) }, { status: 500 });
  }
}