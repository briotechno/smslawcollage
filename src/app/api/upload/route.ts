import { writeFile, mkdir } from "fs/promises";
import path from "path";
import os from "os";
import { BASE_URL } from "@/lib/config";

export async function POST(request: Request) {
  try {
    const formData = await (request as any).formData();
    const file = formData.get("image");
    if (!file || typeof file === "string") {
      return Response.json({ success: false, message: "No image file uploaded" }, { status: 400 });
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    const ext = file.name.split('.').pop() || 'jpg';
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const uploadDir = path.join(process.cwd(), "public", "upload");
    const filePath = path.join(uploadDir, filename);

    try {
      // Ensure upload directory exists (may fail on read-only deployments)
      await mkdir(uploadDir, { recursive: true });
      await writeFile(filePath, buffer);

  const imageUrl = `/upload/${filename}`;
  const fullUrl = `${BASE_URL}${imageUrl}`;
  return Response.json({ success: true, url: imageUrl, fullUrl, filename, stored: 'public' });
    } catch (err: any) {
      // If the filesystem is read-only (common on serverless), fall back to temp dir and return a data URL
      const isReadOnly = err && (err.code === 'EROFS' || err.code === 'EACCES' || String(err).toLowerCase().includes('read-only'));
      if (isReadOnly) {
        try {
          const tmpDir = path.join(os.tmpdir(), 'smslawcollage-uploads');
          await mkdir(tmpDir, { recursive: true });
          const tmpPath = path.join(tmpDir, filename);
          await writeFile(tmpPath, buffer);
          const imageUrl = `/upload/${filename}`;
          const fullUrl = `${BASE_URL}${imageUrl}`;
          return Response.json({
            success: true,
            stored: 'tmp',
            tmpPath,
            filename,
            url: imageUrl,
            fullUrl,
            message: 'Filesystem is read-only in this environment; file was written to a temporary directory on the server. Temporary files are ephemeral and will not be served from the public site. For persistent public hosting, configure external storage (S3, Cloud Storage) and return its URL.'
          }, { status: 200 });
        } catch (tmpErr: any) {
          return Response.json({ success: false, error: String(tmpErr) }, { status: 500 });
        }
      }

      return Response.json({ success: false, error: String(err) }, { status: 500 });
    }
  } catch (err: any) {
    return Response.json({ success: false, error: String(err) }, { status: 500 });
  }
}
