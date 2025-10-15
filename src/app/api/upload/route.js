import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("image");
    if (!file || typeof file === "string") {
      return Response.json({ success: false, message: "No image file uploaded" }, { status: 400 });
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    const ext = file.name.split(".").pop() || "jpg";
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const uploadDir = path.join(process.cwd(), "public", "upload");
    const filePath = path.join(uploadDir, filename);
    await writeFile(filePath, buffer);
  // Build public URL with base
  let baseUrl = request.headers.get("origin") || request.headers.get("referer") || "";
  if (!baseUrl) {
    baseUrl = "http://localhost:3000";
  }
  const imageUrl = `/upload/${filename}`;
  const fullUrl = `${baseUrl.replace(/\/$/,"")}${imageUrl}`;
  return Response.json({ success: true, url: imageUrl, fullUrl, filename });
  } catch (err) {
    return Response.json({ success: false, error: String(err) }, { status: 500 });
  }
}