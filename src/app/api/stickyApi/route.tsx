import { stickyData } from "@/app/apiData/stickyData";
import { NextRequest } from "next/server";

export async function GET(req:NextRequest){
     return new Response(JSON.stringify(stickyData))    
}
  
