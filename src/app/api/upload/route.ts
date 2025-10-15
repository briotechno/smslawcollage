import { writeFile, mkdir } from "fs/promises";
import path from "path";
import os from "os";

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

      let baseUrl = request.headers.get("origin") || request.headers.get("referer") || "";
      if (!baseUrl) {
        baseUrl = "http://localhost:3000";
      }
      const imageUrl = `/upload/${filename}`;
      const fullUrl = `${baseUrl.replace(/\/$/,"")}${imageUrl}`;
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
          const dataUrl = `data:${(file as any).type || 'application/octet-stream'};base64,${buffer.toString('base64')}`;
          return Response.json({
            success: true,
            stored: 'tmp',
            tmpPath,
            filename,
            // Note: tmp files are ephemeral and not served by Next.js. Provide a data URL so the client can immediately use the image if needed.
            dataUrl,
            message: 'Deployment filesystem is read-only; file written to temporary dir. For persistent public hosting, configure external storage (S3, Cloud Storage) and return its URL.'
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
