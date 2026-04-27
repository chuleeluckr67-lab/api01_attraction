const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS, // ✅ แก้จาก DB_PASSWORD เป็น DB_PASS ให้ตรงกับ .env
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 4000,
    ssl: process.env.DB_SSL === 'true' ? {
        rejectUnauthorized: true
    } : null,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;