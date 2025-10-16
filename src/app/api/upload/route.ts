import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // ✅ This only works for multipart/form-data
    const formData = await request.formData();
    const file = formData.get("image");

    if (!file || typeof file === "string") {
      return NextResponse.json(
        { success: false, message: "No image file uploaded" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const ext = file.name.split(".").pop() || "jpg";
    const filename = `${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}.${ext}`;

    const imagekitModule = await import("imagekit");
    const ImageKit = imagekitModule.default || imagekitModule;

    const imagekit = new ImageKit({
      publicKey: "public_Wh5H7m10mZP1hNnXQ/sEcYEu2YU=",
      privateKey: "private_a6fmJfBgFcuzB83jdcGNXG/hme4=",
      urlEndpoint: "https://ik.imagekit.io/",
    });

    const uploaded = await imagekit.upload({
      file: buffer,
      fileName: filename,
      folder: "/requirements",
      useUniqueFileName: true,
    });

    return NextResponse.json({
      success: true,
      url: uploaded.url,
      fileId: uploaded.fileId,
      name: uploaded.name,
    });
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { success: false, error: error.message || String(error) },
      { status: 500 }
    );
  }
}
