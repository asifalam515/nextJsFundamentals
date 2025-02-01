import { NextResponse } from "next/server";
import { Result } from "postcss";

export function GET(_, response) {
  const { id } = response.params;
  return NextResponse.json({
    id,
  });
}
