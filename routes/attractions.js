const express = require('express');
const router = express.Router();
const db = require('../db');

// ✅ 1. GET ทั้งหมด (อันนี้คืออันที่ทำให้คุณเข้าผ่าน Browser แล้วเห็นข้อมูล)
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM attractions');
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ status: 'error', message: err.message });
    }
});

// ✅ 2. GET ตาม ID
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM attractions WHERE id = ?', [req.params.id]);
        if (rows.length === 0) return res.status(404).json({ message: 'ไม่พบข้อมูล' });
        res.status(200).json(rows[0]);
    } catch (err) {
        res.status(500).json({ status: 'error', message: err.message });
    }
});

// POST: สร้างข้อมูลใหม่ (โค้ดเดิมของคุณ)
router.post('/', async (req, res) => {
    const { name, detail, coverimage, latitude, longitude } = req.body;
    if (!name || !detail) {
        return res.status(400).json({ status: 'error', message: 'กรุณากรอกชื่อและรายละเอียดให้ครบถ้วน' });
    }
    try {
        const [result] = await db.query(
            'INSERT INTO attractions (name, detail, coverimage, latitude, longitude) VALUES (?, ?, ?, ?, ?)',
            [name, detail, coverimage, latitude, longitude]
        );
        res.status(201).json({ status: 'ok', id: result.insertId, message: 'สร้างข้อมูลสถานที่สำเร็จ' });
    } catch (err) {
        res.status(500).json({ status: 'error', message: err.message });
    }
});

// ✅ 3. DELETE ตาม ID
router.delete('/:id', async (req, res) => {
    try {
        const [result] = await db.query('DELETE FROM attractions WHERE id = ?', [req.params.id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'ไม่พบข้อมูลที่ต้องการลบ' });
        res.status(200).json({ status: 'ok', message: 'ลบข้อมูลสำเร็จ' });
    } catch (err) {
        res.status(500).json({ status: 'error', message: err.message });
    }
});

module.exports = router;