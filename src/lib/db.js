// lib/db.js
import mysql from "mysql2/promise";

export async function connectDB() {
  const connection = await mysql.createConnection({
    host: "localhost",        // or your DB host
    user: "root",             // your MySQL username
    password: "Admin@1234", // your MySQL password
    database: "smslawcollage", // your DB name
  });
  return connection;
}
