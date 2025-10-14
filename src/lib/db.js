import mysql from "mysql2/promise";

export async function connectDB() {
  const connection = await mysql.createConnection({
    host: "127.0.0.1",        // localhost works too
    user: "root",             // your MySQL username
    password: "",        // your MySQL password
    database: "smslawcollage", // the DB you want to use
    port: 3306
  });
  return connection;
}