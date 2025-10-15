import mysql from "mysql2/promise";

export async function connectDB() {
 const connection = await mysql.createConnection({
    host: "p3plzcpnl508454.prod.phx3.secureserver.net",
    user: "briotechno",
    password: "Briotechno@983",
    database: "SMS_COLLAGE",
    port: 3306, // ✅ MySQL default port
    connectTimeout: 10000, // optional, for safety
  });
  return connection;
}