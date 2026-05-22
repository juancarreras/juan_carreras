import Database from 'better-sqlite3';
const db=new Database('data/game.db');
db.exec(`CREATE TABLE IF NOT EXISTS rooms(code TEXT PRIMARY KEY,data TEXT NOT NULL);`);
export function getRoom(code:string){const row=db.prepare('SELECT data FROM rooms WHERE code=?').get(code) as any; return row?JSON.parse(row.data):null;}
export function saveRoom(code:string,data:any){db.prepare('INSERT INTO rooms(code,data) VALUES(?,?) ON CONFLICT(code) DO UPDATE SET data=excluded.data').run(code,JSON.stringify(data));}
