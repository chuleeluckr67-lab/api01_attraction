const mysql = require('mysql2/promise');
require('dotenv').config();

// TiDB Cloud บังคับใช้ SSL ถ้าใน .env ตั้ง DB_SSL=true ให้ใช้ค่านี้
const sslOption = process.env.DB_SSL === 'true'
  ? { minVersion: 'TLSv1.2', rejectUnauthorized: true } 
  : false;

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,   // แก้จาก DB_USER เป็น DB_USERNAME
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE, // แก้จาก DB_NAME เป็น DB_DATABASE
  ssl: sslOption,
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool;