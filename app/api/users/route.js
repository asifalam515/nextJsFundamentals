import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ result: "hello from next js" });
}
