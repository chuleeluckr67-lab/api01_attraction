CREATE TABLE attractions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    detail TEXT,                 -- ใช้ TEXT เพื่อรองรับคำบรรยายยาวๆ
    coverimage TEXT,             -- เปลี่ยนเป็น TEXT เผื่อ URL รูปภาพยาวมาก
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    likes INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);