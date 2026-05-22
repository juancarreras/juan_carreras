import { NextResponse } from 'next/server';import { getRoomState } from '@/lib/game';
export async function GET(_:Request,{params}:{params:Promise<{code:string}>}){try{return NextResponse.json(getRoomState((await params).code));}catch(e:any){return NextResponse.json({error:e.message},{status:404});}}
