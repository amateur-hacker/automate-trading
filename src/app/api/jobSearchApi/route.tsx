import { NextRequest, NextResponse } from "next/server";
import { jobSearchData } from "@/app/apiData/jobSearchData";

export async function GET(req: NextRequest) {
  return NextResponse.json(jobSearchData)
}
