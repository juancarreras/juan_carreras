'use client';import { useEffect,useState } from 'react';
export function useRoomPolling(code:string|null){const [room,setRoom]=useState<any>(null);const [error,setError]=useState('');
useEffect(()=>{if(!code) return; let stop=false; const run=async()=>{try{const r=await fetch(`/api/rooms/${code}`,{cache:'no-store'});const j=await r.json(); if(!r.ok) throw Error(j.error); if(!stop) {setRoom(j);setError('');}}catch(e:any){if(!stop) setError(e.message);}}; run(); const id=setInterval(run,1500); return ()=>{stop=true;clearInterval(id);};},[code]); return {room,error};}
