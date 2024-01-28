import { bookmarkData } from "@/app/apiData/bookmarkApiData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(bookmarkData);
}
