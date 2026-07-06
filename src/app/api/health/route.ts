import { NextResponse } from "next/server";

export async function GET() {
  try {
    // TODO: add proper health check

    return NextResponse.json(
      {
        success: true,
        status: "healthy",
        error: null,
        data: {
          timestamp: new Date().toISOString(),
          uptime: process.uptime(),
        },
      },
      { status: 200 },
    );
  } catch (e) {
    return NextResponse.json(
      {
        success: false,
        status: "unhealthy",
        error: e instanceof Error ? e.message : "Unknown error",
        data: null,
      },
      { status: 503 },
    );
  }
}
