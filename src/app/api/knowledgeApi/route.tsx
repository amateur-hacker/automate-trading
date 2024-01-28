import { NextRequest } from "next/server";
import { knowledgeData } from "@/app/apiData/knowledgeBase";
export async function GET(req:NextRequest){
     return new Response(JSON.stringify(knowledgeData))    
}
  
