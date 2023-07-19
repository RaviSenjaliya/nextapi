import { user } from "@/util/db";
import { NextResponse } from "next/server";

//=============================================================

export function GET(req, res) {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}
//=============================================================

export async function POST(req) {
  let payload = await req.json();

  if (!payload.name || !payload.age) {
    return NextResponse.json(
      { result: "all field requirde", success: false },
      { status: 201 }
    );
  }
  return NextResponse.json({ result: payload, success: true }, { status: 201 });
}

//=============================================================
