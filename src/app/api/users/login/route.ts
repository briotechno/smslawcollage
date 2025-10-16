import { isEmpty, isEmptyObject } from "@/lib/validation";
import { connectDB } from "@/lib/db";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "smslawcollage_secret";

async function ensureUsersTable(db: any) {
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

function signToken(payload: any) {
  return jwt.sign(payload, JWT_SECRET as string, { expiresIn: "2h" });
}

export async function POST(request: Request) {
  try {
    const body = await (request as any).json();
    const { username = "", password = "" } = body;
    const errors: any = {};
    if (isEmpty(username)) errors.username = "Username is mandatory.";
    if (isEmpty(password)) errors.password = "Password is mandatory.";
    if (!isEmptyObject(errors)) {
      return Response.json({ success: false, errors, message: "Validation failed." }, { status: 400 });
    }
    const db = await connectDB();
    await ensureUsersTable(db);
    const [rows] = (await db.execute("SELECT id, username, password, name, email, role,image FROM users WHERE username = ?", [username])) as any;
    await db.end();
    if (rows.length > 0 && password === rows[0].password) {
      const user = rows[0];
      const token = signToken({ id: user.id, username: user.username, role: user.role });
      return Response.json({ success: true, message: "Login successful", token, user: { id: user.id, username: user.username, name: user.name, email: user.email, role: user.role,image:user?.image } }, { status: 200 });
    } else {
      return Response.json({ success: false, message: "Invalid username or password" }, { status: 401 });
    }
  } catch (err: any) {
    return Response.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const db = await connectDB();
    await ensureUsersTable(db);
    const [rows] = (await db.execute("SELECT id, username, name, email, role, created_at FROM users ORDER BY id DESC")) as any;
    await db.end();
    return Response.json({ success: true, data: rows }, { status: 200 });
  } catch (err: any) {
    return Response.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
