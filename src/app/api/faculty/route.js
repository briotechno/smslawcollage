import { isEmpty } from "@/lib/validation";
import { connectDB } from "@/lib/db";
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

// Fields used: name, title, post, experience, expertise, image

async function ensureFacultyTable(db) {
  // Create table if not exists with basic fields matching the UI
  const sql = `
    CREATE TABLE IF NOT EXISTS faculty (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      title VARCHAR(255) NOT NULL,
      post VARCHAR(255) NOT NULL,
      experience VARCHAR(255),
      expertise TEXT,
      image TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `;
  await db.execute(sql);
}

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    const db = await connectDB();
    await ensureFacultyTable(db);

    if (id) {
      const [rows] = await db.execute(
        "SELECT id, name, title, post, experience, expertise, image FROM faculty WHERE id = ?",
        [id]
      );
      await db.end();
      if (!rows || rows.length === 0) {
        return Response.json(
          { success: false, message: "Faculty not found" },
          { status: 404 }
        );
      }
      return Response.json({ success: true, data: rows[0] }, { status: 200 });
    }

    const [rows] = await db.execute(
      "SELECT id, name, title, post, experience, expertise, image FROM faculty ORDER BY id DESC"
    );
    await db.end();
    return Response.json({ success: true, data: rows }, { status: 200 });
  } catch (err) {
    return Response.json(
      { success: false, error: String(err) },
      { status: 500 }
    );
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
    const {
      name = "",
      title = "",
      post = "",
      experience = "",
      expertise = "",
      image = "",
    } = body;

    const errors = {};
    if (isEmpty(name)) errors.name = "Name is mandatory.";
    if (isEmpty(title)) errors.title = "Title is mandatory.";
    if (isEmpty(post)) errors.post = "Post is mandatory.";

    if (Object.keys(errors).length > 0) {
      return Response.json(
        { success: false, errors, message: "Validation failed" },
        { status: 400 }
      );
    }

    const db = await connectDB();
    await ensureFacultyTable(db);
    const [result] = await db.execute(
      "INSERT INTO faculty (name, title, post, experience, expertise, image) VALUES (?,?,?,?,?,?)",
      [name, title, post, experience, expertise, image]
    );
    await db.end();

    return Response.json(
      { success: true, id: result.insertId, message: "Faculty created" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json(
      { success: false, error: String(err) },
      { status: 500 }
    );
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
    if (!id)
      return Response.json(
        { success: false, message: "id is required" },
        { status: 400 }
      );

    const fields = [];
    const params = [];
    ["name", "title", "post", "experience", "expertise", "image"].forEach(
      (f) => {
        if (Object.prototype.hasOwnProperty.call(body, f)) {
          fields.push(`${f} = ?`);
          params.push(body[f]);
        }
      }
    );

    if (fields.length === 0)
      return Response.json(
        { success: false, message: "No fields to update" },
        { status: 400 }
      );

    params.push(id);
    const db = await connectDB();
    await ensureFacultyTable(db);
    const [result] = await db.execute(
      `UPDATE faculty SET ${fields.join(", ")} WHERE id = ?`,
      params
    );
    await db.end();

    return Response.json(
      { success: true, message: "Faculty updated successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { success: false, error: String(err) },
      { status: 500 }
    );
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
    if (!id)
      return Response.json(
        { success: false, message: "id query param is required" },
        { status: 400 }
      );

    const db = await connectDB();
    await ensureFacultyTable(db);
    const [result] = await db.execute("DELETE FROM faculty WHERE id = ?", [id]);
    await db.end();

    return Response.json(
      { success: true, message: "Faculty deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { success: false, error: String(err) },
      { status: 500 }
    );
  }
}
