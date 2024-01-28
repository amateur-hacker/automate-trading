import { SearchResultData } from "@/app/apiData/searchApiData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(SearchResultData);
}
