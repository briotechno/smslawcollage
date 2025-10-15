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

async function ensureTable(db) {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS achievements (
      id INT PRIMARY KEY AUTO_INCREMENT,
      type VARCHAR(50) NOT NULL,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      year VARCHAR(10),
      category VARCHAR(100),
      award VARCHAR(100),
      prize VARCHAR(100),
      participants TEXT,
      event VARCHAR(255),
      organizer VARCHAR(255),
      level VARCHAR(50),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);
}

function parseParticipants(row) {
  if (!row) return row;
  if (row.participants) {
    try { row.participants = JSON.parse(row.participants); } catch { row.participants = []; }
  } else {
    row.participants = [];
  }
  return row;
}

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    const type = url.searchParams.get("type");
    const db = await connectDB();
    await ensureTable(db);
    if (id) {
      const [rows] = await db.execute("SELECT * FROM achievements WHERE id = ?", [id]);
      await db.end();
      if (!rows || rows.length === 0) {
        return Response.json({ success: false, message: "Achievement not found" }, { status: 404 });
      }
      return Response.json({ success: true, data: parseParticipants(rows[0]) }, { status: 200 });
    }

    let rows;
    if (type) {
      [rows] = await db.execute("SELECT * FROM achievements WHERE type = ? ORDER BY year DESC, id DESC", [type]);
    } else {
      [rows] = await db.execute("SELECT * FROM achievements ORDER BY year DESC, id DESC");
    }
    await db.end();
    return Response.json({ success: true, data: rows.map(parseParticipants) }, { status: 200 });
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
    const { type = "academic", title = "", description = "", year = "", category = "", award = "", prize = "", participants = [], event = "", organizer = "", level = "" } = body;
    const errors = {};
    if (isEmpty(type)) errors.type = "Type is required.";
    if (isEmpty(title)) errors.title = "Title is required.";
    if (isEmpty(description)) errors.description = "Description is required.";
    if (Object.keys(errors).length > 0) {
      return Response.json({ success: false, errors, message: "Validation failed" }, { status: 400 });
    }
    const db = await connectDB();
    await ensureTable(db);
    const [result] = await db.execute(
      "INSERT INTO achievements (type, title, description, year, category, award, prize, participants, event, organizer, level) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
      [type, title, description, year, category, award, prize, JSON.stringify(participants), event, organizer, level]
    );
    await db.end();
    return Response.json({ success: true, id: result.insertId, message: "Achievement created" }, { status: 201 });
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
    ["type", "title", "description", "year", "category", "award", "prize", "participants", "event", "organizer", "level"].forEach(f => {
      if (Object.prototype.hasOwnProperty.call(body, f)) {
        fields.push(`${f} = ?`);
        params.push(f === "participants" ? JSON.stringify(body[f]) : body[f]);
      }
    });
    if (fields.length === 0) return Response.json({ success: false, message: "No fields to update" }, { status: 400 });
    params.push(id);
    const db = await connectDB();
    await ensureTable(db);
    const [result] = await db.execute(`UPDATE achievements SET ${fields.join(", ")} WHERE id = ?`, params);
    await db.end();
    return Response.json({ success: true, message: "Achievement updated" }, { status: 200 });
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
    await ensureTable(db);
    const [result] = await db.execute("DELETE FROM achievements WHERE id = ?", [id]);
    await db.end();
    return Response.json({ success: true, message: "Achievement deleted" }, { status: 200 });
  } catch (err) {
    return Response.json({ success: false, error: String(err) }, { status: 500 });
  }
}