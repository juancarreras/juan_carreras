import { NextResponse } from 'next/server';import { createRoom } from '@/lib/game';
export async function POST(req:Request){try{const b=await req.json(); return NextResponse.json(createRoom(b.name,b.createPassword,b.roomPassword));}catch(e:any){return NextResponse.json({error:e.message},{status:400});}}
