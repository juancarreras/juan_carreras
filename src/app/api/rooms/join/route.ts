import { NextResponse } from 'next/server';import { joinRoom } from '@/lib/game';
export async function POST(req:Request){try{const b=await req.json(); return NextResponse.json(joinRoom(b.code,b.name,b.roomPassword));}catch(e:any){return NextResponse.json({error:e.message},{status:400});}}
