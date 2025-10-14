import { isEmpty, isEmptyObject } from "@/lib/validation";
import { connectDB } from "@/lib/db";
import bcrypt from "bcryptjs";
export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      name = "", // M
      position = "", // M
      degree = "", // M
      experience = "", // M
      image = "",
      area_of_interests = "",
      project_guided = "",
      doctoral_Programme_guided = "",
      publications = "",
      specific_achievements = "",
      academic_representation_and_professional_nomination = "",
      specific_contribution = "",
      achievements = "",
    } = body;
    const errors = {};
    if (isEmpty(name)) errors.name = "Name is mandatory.";
    if (isEmpty(position)) errors.position = "Position is mandatory.";
    if (isEmpty(degree)) errors.degree = "Degree is mandatory.";
    if (isEmpty(experience)) errors.experience = "Experience is mandatory.";


    // If validation failed
    if (!isEmptyObject(errors)) {
      return Response.json(
        {
          success: false,
          errors,
          message: "Validation failed. Please fix the highlighted fields.",
        },
        { status: 400 }
      );
    }

    // Connect to DB
    const db = await connectDB();

    // Check user credentials
    const [rows] = await db.execute(
      "SELECT password FROM users WHERE username = ?",
      [username]
    );
    await db.end();
    if (rows.length > 0 && await bcrypt.compare(password, rows[0].password)) {
      return Response.json(
        {
          success: true,
          message: "Login successful",
        },
        { status: 200 }
      );
    } else {
      return Response.json(
        {
          success: false,
          message: "Invalid username or password",
        },
        { status: 401 } // Unauthorized
      );
    }
  } catch (err) {
    return Response.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
