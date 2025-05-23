import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import { console } from 'node:inspector';

let conn: Database | null = null;

export async function initDb(): Promise<Database> {
  if (!conn) {
    conn = await open({
      filename: 'bot-data/checker.db',
      driver: sqlite3.Database,
    });

    await conn.exec('PRAGMA foreign_keys = ON;');
  }

  return conn;
}

export async function setupDb(): Promise<void> {
  const db = await initDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS gifts (
      gift_id TEXT NOT NULL UNIQUE, price TEXT NOT NULL
    );
  `);
}

export function isCheap(price: number, floorPrice: number): boolean {
  console.log(Math.floor(floorPrice * 0.35))
  if (price < 180) return true;
  return price < Math.floor(floorPrice * 0.35)
}

export async function isGift(gift_id: number, price: number): Promise<boolean> {
  const db = await initDb();
  if (await db.get('SELECT 1 FROM gifts WHERE gift_id = ? and price = ?;', [gift_id, price])) return true;
  return false;
}

export async function addGift(gift_id: number, price: number): Promise<void> {
  const db = await initDb();
  try {
    await db.run('INSERT INTO gifts (gift_id, price) VALUES (?, ?);', [gift_id, price]);
  } catch {
    await db.run('INSERT OR REPLACE INTO gifts (gift_id, price) VALUES (?, ?);', [gift_id, price]);
  }
}
console.log(
  isCheap(100, 53)
)
console.log(
    await setupDb()
)

console.log(
    await isGift(3392832, 180)
)

console.log(
    await addGift(3392832, 180)
)

console.log(
    await isGift(3392832, 120)
)


