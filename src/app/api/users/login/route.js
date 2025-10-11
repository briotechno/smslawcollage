import { isEmpty , isEmptyObject } from "@/lib/validation";
export async function POST(request) {
  try {
    // Parse body
    const body = await request.json();
    const { username = "", password = "" } = body;

    // Validation errors
    const errors = {};

    // Validate username
    if (isEmpty(username)) {
      errors.username = "Username is mandatory.";
    }

    // Validate password
    if (isEmpty(password)) {
      errors.password = "Password is mandatory.";
    }

    // If validation failed
    if (!isEmptyObject(errors)) {
      return Response.json(
        {
          success: false,
          errors,
          message: "Validation failed. Please fix the highlighted fields.",
        },
        { status: 400 } // <-- use proper HTTP status
      );
    }

    // If validation passed, proceed (e.g., save user or authenticate)
    return Response.json(
      {
        success: true,
        message: "User created successfully.",
        data: { username },
      },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      {
        success: false,
        message: "Internal server error.",
      },
      { status: 500 }
    );
  }
}
