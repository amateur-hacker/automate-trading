import { chatApiData } from "@/app/apiData/chatApiData";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json(chatApiData);
}
