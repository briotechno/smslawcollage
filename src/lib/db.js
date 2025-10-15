import mysql from "mysql2/promise";

export async function connectDB() {
  const connection = await mysql.createConnection({
    host: "p3plzcpnl508454.prod.phx3.secureserver.net",        // localhost works too
    user: "briotechno",             // your MySQL username
    password: "Briotechno@983",        // your MySQL password
    database: "SMS_COLLAGE", // the DB you want to use
    port: 2083
  });
  return connection;
}