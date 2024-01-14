import mysql from 'mysql2/promise';
import { NextResponse } from "next/server";
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export async function GET(response) { 

  const [rows] = await pool.query('SELECT * FROM products');
  const data = rows || null;

  return NextResponse.json( data, { status: 200 });

};