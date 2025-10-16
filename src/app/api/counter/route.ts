import { connectDB } from "@/lib/db";

async function ensureAchievementsTable(db: any) {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS achievements (
      id INT PRIMARY KEY AUTO_INCREMENT
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);
}

async function ensureFacultyTable(db: any) {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS faculty (
      id INT PRIMARY KEY AUTO_INCREMENT
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);
}

async function ensureLegalAidTable(db: any) {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS legal_aid (
      id INT PRIMARY KEY AUTO_INCREMENT
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);
}

async function ensureNewsTable(db: any) {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS news (
      id INT PRIMARY KEY AUTO_INCREMENT
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);
}

export async function GET() {
  let db: any = null;
  try {
    db = await connectDB();
    // Ensure tables exist (minimal schema for count)
    await Promise.all([
      ensureAchievementsTable(db),
      ensureFacultyTable(db),
      ensureLegalAidTable(db),
      ensureNewsTable(db),
    ]);

    const [aRows] = (await db.execute("SELECT COUNT(*) as cnt FROM achievements")) as any;
    const [fRows] = (await db.execute("SELECT COUNT(*) as cnt FROM faculty")) as any;
    const [lRows] = (await db.execute("SELECT COUNT(*) as cnt FROM legal_aid")) as any;
    const [nRows] = (await db.execute("SELECT COUNT(*) as cnt FROM news")) as any;

    const counts = {
      achievements: (aRows && aRows[0] && (aRows[0].cnt ?? aRows[0].COUNT)) ? (aRows[0].cnt ?? aRows[0].COUNT) : 0,
      faculty: (fRows && fRows[0] && (fRows[0].cnt ?? fRows[0].COUNT)) ? (fRows[0].cnt ?? fRows[0].COUNT) : 0,
      legalAid: (lRows && lRows[0] && (lRows[0].cnt ?? lRows[0].COUNT)) ? (lRows[0].cnt ?? lRows[0].COUNT) : 0,
      news: (nRows && nRows[0] && (nRows[0].cnt ?? nRows[0].COUNT)) ? (nRows[0].cnt ?? nRows[0].COUNT) : 0,
    };

    await db.end();
    return Response.json({ success: true, counts }, { status: 200 });
  } catch (err: any) {
    if (db) await db.end();
    return Response.json({ success: false, error: String(err) }, { status: 500 });
  }
}
