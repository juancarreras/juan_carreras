import { NextResponse } from 'next/server';import { mutate } from '@/lib/apiHelpers';
export async function POST(req:Request,{params}:{params:Promise<{code:string}>}){try{return await mutate(req,(await params).code,'vote');}catch(e:any){return NextResponse.json({error:e.message},{status:400});}}
