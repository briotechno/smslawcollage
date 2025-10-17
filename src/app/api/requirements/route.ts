import { connectDB } from '@/lib/db';
import { isEmpty } from '@/lib/validation';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'smslawcollage_secret';

function verifyTokenFromRequest(request: Request) {
  const auth = request.headers.get('authorization') || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
  if (!token) return null;
  try {
    return jwt.verify(token, JWT_SECRET as string);
  } catch {
    return null;
  }
}

async function ensureRequirementsTable(db: any) {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS requirements (
      id INT PRIMARY KEY AUTO_INCREMENT,
      title VARCHAR(255) NOT NULL,
      department VARCHAR(255) NOT NULL,
      deadline DATE NOT NULL,
      file TEXT,
      notification_file TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);
}

export async function GET(request: Request) {
  try {
    const url = new URL((request as any).url);
    const id = url.searchParams.get('id');
    const db = await connectDB();
    await ensureRequirementsTable(db);
    if (id) {
      const [rows] = (await db.execute('SELECT * FROM requirements WHERE id = ?', [id])) as any;
      await db.end();
      if (!rows || rows.length === 0) {
        return Response.json({ success: false, message: 'Requirement not found' }, { status: 404 });
      }
      return Response.json({ success: true, data: rows[0] }, { status: 200 });
    }
    const [rows] = (await db.execute('SELECT * FROM requirements ORDER BY deadline DESC, id DESC')) as any;
    await db.end();
    return Response.json({ success: true, data: rows }, { status: 200 });
  } catch (err: any) {
    return Response.json({ success: false, error: String(err) }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const user = verifyTokenFromRequest(request);
  if (!user) {
    return Response.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }
  try {
    const body = await (request as any).json();
    const { title = '', department = '', deadline = '', file = '', notification_file = '' } = body;
    const errors: any = {};
    if (isEmpty(title)) errors.title = 'Title is required.';
    if (isEmpty(department)) errors.department = 'Department is required.';
    if (isEmpty(deadline)) errors.deadline = 'Deadline is required.';
    if (Object.keys(errors).length > 0) {
      return Response.json({ success: false, errors, message: 'Validation failed' }, { status: 400 });
    }
    const db = await connectDB();
    await ensureRequirementsTable(db);
    const [result] = (await db.execute(
      'INSERT INTO requirements (title, department, deadline, file, notification_file) VALUES (?,?,?,?,?)',
      [title, department, deadline, file, notification_file]
    )) as any;
    await db.end();
    return Response.json({ success: true, id: result.insertId, message: 'Requirement created' }, { status: 201 });
  } catch (err: any) {
    return Response.json({ success: false, error: String(err) }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const user = verifyTokenFromRequest(request);
  if (!user) {
    return Response.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }
  try {
    const body = await (request as any).json();
    const { id } = body;
    if (!id) return Response.json({ success: false, message: 'id is required' }, { status: 400 });
    const fields: string[] = [];
    const params: any[] = [];
    ['title', 'department', 'deadline', 'file', 'notification_file'].forEach(f => {
      if (Object.prototype.hasOwnProperty.call(body, f)) {
        fields.push(`${f} = ?`);
        params.push(body[f]);
      }
    });
    if (fields.length === 0) return Response.json({ success: false, message: 'No fields to update' }, { status: 400 });
    params.push(id);
    const db = await connectDB();
    await ensureRequirementsTable(db);
    const [result] = (await db.execute(`UPDATE requirements SET ${fields.join(', ')} WHERE id = ?`, params)) as any;
    await db.end();
    return Response.json({ success: true, message: 'Requirement updated successfully' }, { status: 200 });
  } catch (err: any) {
    return Response.json({ success: false, error: String(err) }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const user = verifyTokenFromRequest(request);
  if (!user) {
    return Response.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }
  try {
    // Accept id either as query param or in JSON body
    const url = new URL((request as any).url);
    let id = url.searchParams.get('id');
    if (!id) {
      try {
        const body = await (request as any).json();
        id = body?.id;
      } catch (_) {
        // ignore
      }
    }
    if (!id) return Response.json({ success: false, message: 'id is required' }, { status: 400 });
    const db = await connectDB();
    await ensureRequirementsTable(db);
    const [result] = (await db.execute('DELETE FROM requirements WHERE id = ?', [id])) as any;
    await db.end();
    return Response.json({ success: true, message: 'Requirement deleted successfully' }, { status: 200 });
  } catch (err: any) {
    return Response.json({ success: false, error: String(err) }, { status: 500 });
  }
}
