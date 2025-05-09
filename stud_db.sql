CREATE DATABASE IF NOT EXISTS college_management;
USE college_management;

CREATE TABLE IF NOT EXISTS student (
    reg_no VARCHAR(9) NOT NULL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    passwd VARCHAR(255) NOT NULL,  -- Increased length for security (hashed passwords)
    phone_no VARCHAR(10),
    email VARCHAR(50) NOT NULL UNIQUE,
    gender CHAR(1) CHECK (gender IN ('M', 'F', 'O')),
    branch VARCHAR(50),
    present_year INT CHECK (present_year BETWEEN 1 AND 4),
    fee_paid BOOLEAN DEFAULT 0,
    is_registered BOOLEAN DEFAULT 0
);

CREATE TABLE IF NOT EXISTS feedback (
    feedback_id INT AUTO_INCREMENT PRIMARY KEY,
    reg_no VARCHAR(9) NOT NULL,
    teacher_name VARCHAR(50) NOT NULL,
    quality INT CHECK (quality BETWEEN 1 AND 5),
    encourages INT CHECK (encourages BETWEEN 1 AND 5),
    pace INT CHECK (pace BETWEEN 1 AND 5),
    feedback TEXT,
    FOREIGN KEY (reg_no) REFERENCES student(reg_no) ON DELETE CASCADE
);
