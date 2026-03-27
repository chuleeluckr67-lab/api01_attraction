CREATE DATABASE IF NOT EXISTS attraction_db;
USE attraction_db;

CREATE TABLE IF NOT EXISTS attractions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    detail TEXT,
    coverimage VARCHAR(500),
    latitude DECIMAL(10,6),
    longitude DECIMAL(10,6),
    likes INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);