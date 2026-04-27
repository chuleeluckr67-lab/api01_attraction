const express = require('express');
const cors = require('cors');
require('dotenv').config();

const attractionRoutes = require('./routes/attractions');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes - ปรับให้เหลือแค่ /attractions ตามที่คุณต้องการเรียก
app.use('/attractions', attractionRoutes);

// Root path สำหรับเช็คว่า Server ออนไลน์หรือยัง
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Thai Cafe Attraction API' });
});

// สำหรับรันในเครื่องตัวเอง (Local)
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3333;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

// สำคัญมาก: ต้อง Export app เพื่อให้ Vercel ใช้งานได้
module.exports = app;