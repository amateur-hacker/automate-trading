import { taskData } from "@/app/apiData/taskData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(taskData);
}
