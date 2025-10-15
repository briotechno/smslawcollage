import { isEmpty, isEmptyObject } from "@/lib/validation";
import { connectDB } from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "smslawcollage_secret";

async function ensureUsersTable(db) {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id INT PRIMARY KEY AUTO_INCREMENT,
      username VARCHAR(100) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      name VARCHAR(255),
      email VARCHAR(255),
      role VARCHAR(50) DEFAULT 'user',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);
}

function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "2h" });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { username = "", password = "" } = body;
    const errors = {};
    if (isEmpty(username)) errors.username = "Username is mandatory.";
    if (isEmpty(password)) errors.password = "Password is mandatory.";
    if (!isEmptyObject(errors)) {
      return Response.json({ success: false, errors, message: "Validation failed." }, { status: 400 });
    }
    const db = await connectDB();
    await ensureUsersTable(db);
    const [rows] = await db.execute("SELECT id, username, password, name, email, role FROM users WHERE username = ?", [username]);
    await db.end();
    if (rows.length > 0 && password === rows[0].password) {
      // Issue JWT token
      const user = rows[0];
      const token = signToken({ id: user.id, username: user.username, role: user.role });
      return Response.json({ success: true, message: "Login successful", token, user: { id: user.id, username: user.username, name: user.name, email: user.email, role: user.role } }, { status: 200 });
    } else {
      return Response.json({ success: false, message: "Invalid username or password" }, { status: 401 });
    }
  } catch (err) {
    return Response.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const db = await connectDB();
    await ensureUsersTable(db);
    const [rows] = await db.execute("SELECT id, username, name, email, role, created_at FROM users ORDER BY id DESC");
    await db.end();
    return Response.json({ success: true, data: rows }, { status: 200 });
  } catch (err) {
    return Response.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
