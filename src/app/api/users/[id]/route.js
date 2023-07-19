import { user } from "@/util/db";
import { NextResponse } from "next/server";

//req ma je apde data lakhi te ave and res ma upar url ma je id ave te ave

export function GET(req, res) {
  const data = user.filter((val) => val.id == res.params.id);
  return NextResponse.json(
    data.length == 0
      ? { result: "no data found..🙄", success: false }
      : { result: data[0], success: true },
    { status: 200 }
  );
}

//===============(PUT)==============================================

export async function PUT(req, res) {
  let data = await req.json();
  data.id = res.params.id;
  if (!data.id || !data.name || !data.age) {
    return NextResponse.json({ result: "oppps....." });
  }
  return NextResponse.json({ result: data });
}
