import { toDoData } from "@/app/apiData/toDoData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(toDoData);
}
