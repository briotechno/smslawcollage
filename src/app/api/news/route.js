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

async function ensureNewsTable(db) {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS news (
      id INT PRIMARY KEY AUTO_INCREMENT,
      title VARCHAR(255) NOT NULL,
      summary TEXT NOT NULL,
      content TEXT NOT NULL,
      date DATE NOT NULL,
      category VARCHAR(100),
      status VARCHAR(20) NOT NULL,
      imageUrl TEXT,
      tags TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);
}

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    const db = await connectDB();
    await ensureNewsTable(db);
    if (id) {
      const [rows] = await db.execute("SELECT * FROM news WHERE id = ?", [id]);
      await db.end();
      if (!rows || rows.length === 0) {
        return Response.json({ success: false, message: "News not found" }, { status: 404 });
      }
      // Parse tags from string to array
      if (rows[0].tags) rows[0].tags = JSON.parse(rows[0].tags);
      return Response.json({ success: true, data: rows[0] }, { status: 200 });
    }
    const [rows] = await db.execute("SELECT * FROM news ORDER BY date DESC, id DESC");
    await db.end();
    // Parse tags for each row
    rows.forEach(row => { if (row.tags) row.tags = JSON.parse(row.tags); });
    return Response.json({ success: true, data: rows }, { status: 200 });
  } catch (err) {
    return Response.json({ success: false, error: String(err) }, { status: 500 });
  }
}

export async function POST(request) {
  // JWT check
  const user = verifyTokenFromRequest(request);
  if (!user) {
    return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = await request.json();
    const { title = "", summary = "", content = "", date = "", category = "General", status = "Draft", imageUrl = "", tags = [] } = body;
    const errors = {};
    if (isEmpty(title)) errors.title = "Title is required.";
    if (isEmpty(summary)) errors.summary = "Summary is required.";
    if (isEmpty(content)) errors.content = "Content is required.";
    if (isEmpty(date)) errors.date = "Date is required.";
    if (isEmpty(status)) errors.status = "Status is required.";
    if (Object.keys(errors).length > 0) {
      return Response.json({ success: false, errors, message: "Validation failed" }, { status: 400 });
    }
    const db = await connectDB();
    await ensureNewsTable(db);
    const [result] = await db.execute(
      "INSERT INTO news (title, summary, content, date, category, status, imageUrl, tags) VALUES (?,?,?,?,?,?,?,?)",
      [title, summary, content, date, category, status, imageUrl, JSON.stringify(tags)]
    );
    await db.end();
    return Response.json({ success: true, id: result.insertId, message: "News created" }, { status: 201 });
  } catch (err) {
    return Response.json({ success: false, error: String(err) }, { status: 500 });
  }
}

export async function PUT(request) {
  // JWT check
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
    ["title", "summary", "content", "date", "category", "status", "imageUrl", "tags"].forEach(f => {
      if (Object.prototype.hasOwnProperty.call(body, f)) {
        fields.push(`${f} = ?`);
        params.push(f === "tags" ? JSON.stringify(body[f]) : body[f]);
      }
    });
    if (fields.length === 0) return Response.json({ success: false, message: "No fields to update" }, { status: 400 });
    params.push(id);
    const db = await connectDB();
    await ensureNewsTable(db);
    const [result] = await db.execute(`UPDATE news SET ${fields.join(", ")} WHERE id = ?`, params);
    await db.end();
    return Response.json({ success: true, message:'News updated successfully' }, { status: 200 });
  } catch (err) {
    return Response.json({ success: false, error: String(err) }, { status: 500 });
  }
}

export async function DELETE(request) {
  // JWT check
  const user = verifyTokenFromRequest(request);
  if (!user) {
    return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    if (!id) return Response.json({ success: false, message: "id query param is required" }, { status: 400 });
    const db = await connectDB();
    await ensureNewsTable(db);
    const [result] = await db.execute("DELETE FROM news WHERE id = ?", [id]);
    await db.end();
    return Response.json({ success: true, message:'News deleted successfully' }, { status: 200 });
  } catch (err) {
    return Response.json({ success: false, error: String(err) }, { status: 500 });
  }
}