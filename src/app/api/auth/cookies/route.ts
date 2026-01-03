import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
const secretKey: any = process.env.JWT_SECRET

 export async function GET(req:any){
    const cookieStore:any = await cookies()
    return NextResponse.json({})

 }


 export async function getUserId(){
   const cookieStore:any = await cookies()
   return cookieStore.get('user-id').value
 }