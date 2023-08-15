import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = (await req.json()) as { email: string };
  console.log("🚀 ~ file: route.ts:5 ~ POST ~ formData.email", formData.email);
  return NextResponse.json({ data: { me: true } });
}
