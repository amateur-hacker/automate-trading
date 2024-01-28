import { ProductData } from "@/app/apiData/eCommerceApiData";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json(ProductData);
}
