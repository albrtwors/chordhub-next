import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export default async function proxy(request: any) { 
  const cookieStore = await cookies()
  const cookie = cookieStore.get('user-id')

  if(!cookie){
    return NextResponse.redirect(new URL('http://localhost:3000/signin'), request.url)
  }

  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/chordhub/:path*', '/chordhub'],
}