import { chatMemberApiData } from "@/app/apiData/chatMemberApiData";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json(chatMemberApiData);
}
