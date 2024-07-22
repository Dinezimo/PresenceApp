DROP DATABASE IF EXISTS presence_db;
CREATE DATABASE presence_db;
USE presence_db;

CREATE TABLE institutions (
    institution_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE rooms (
    room_id INT AUTO_INCREMENT PRIMARY KEY,
    institution_id INT,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_institution_room FOREIGN KEY (institution_id) REFERENCES institutions(institution_id) ON DELETE CASCADE
);

CREATE TABLE groups (
    group_id INT AUTO_INCREMENT PRIMARY KEY,
    institution_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_institution_group FOREIGN KEY (institution_id) REFERENCES institutions(institution_id) ON DELETE CASCADE
);

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    institution_id INT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('student', 'teacher', 'institution', 'userlite') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_institution_user FOREIGN KEY (institution_id) REFERENCES institutions(institution_id) ON DELETE CASCADE
);

CREATE TABLE group_users (
    group_user_id INT AUTO_INCREMENT PRIMARY KEY,
    group_id INT,
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_group_user FOREIGN KEY (group_id) REFERENCES groups(group_id) ON DELETE CASCADE,
    CONSTRAINT fk_user_group_user FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE group_responsibles (
    group_responsible_id INT AUTO_INCREMENT PRIMARY KEY,
    group_id INT,
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_group_responsible FOREIGN KEY (group_id) REFERENCES groups(group_id) ON DELETE CASCADE,
    CONSTRAINT fk_user_group_responsible FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE schedules (
    schedule_id INT AUTO_INCREMENT PRIMARY KEY,
    group_id INT,
    day_of_week INT NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_group_schedule FOREIGN KEY (group_id) REFERENCES groups(group_id) ON DELETE CASCADE
);

CREATE TABLE sessions (
    session_id INT AUTO_INCREMENT PRIMARY KEY,
    group_id INT,
    schedule_id INT,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_group_session FOREIGN KEY (group_id) REFERENCES groups(group_id) ON DELETE CASCADE,
    CONSTRAINT fk_schedule_session FOREIGN KEY (schedule_id) REFERENCES schedules(schedule_id) ON DELETE CASCADE
);

CREATE TABLE attendance (
    attendance_id INT AUTO_INCREMENT PRIMARY KEY,
    session_id INT,
    user_id INT,
    status ENUM('present', 'absent', 'excused') NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_session_attendance FOREIGN KEY (session_id) REFERENCES sessions(session_id) ON DELETE CASCADE,
    CONSTRAINT fk_user_attendance FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE notifications (
    notification_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user_notification FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE reports (
    report_id INT AUTO_INCREMENT PRIMARY KEY,
    institution_id INT,
    generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    content TEXT NOT NULL,
    CONSTRAINT fk_institution_report FOREIGN KEY (institution_id) REFERENCES institutions(institution_id) ON DELETE CASCADE
);

CREATE TABLE profiles (
    profile_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    photo VARCHAR(255),
    biometric_data TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user_profile FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE cameras (
    camera_id INT AUTO_INCREMENT PRIMARY KEY,
    institution_id INT,
    room_id INT,
    location VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_institution_camera FOREIGN KEY (institution_id) REFERENCES institutions(institution_id) ON DELETE CASCADE,
    CONSTRAINT fk_room_camera FOREIGN KEY (room_id) REFERENCES rooms(room_id) ON DELETE CASCADE
);

CREATE TABLE beacons (
    beacon_id INT AUTO_INCREMENT PRIMARY KEY,
    institution_id INT,
    room_id INT,
    location VARCHAR(255) NOT NULL,
    uuid VARCHAR(255) NOT NULL,
    major INT NOT NULL,
    minor INT NOT NULL,
    `range` INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_institution_beacon FOREIGN KEY (institution_id) REFERENCES institutions(institution_id) ON DELETE CASCADE,
    CONSTRAINT fk_room_beacon FOREIGN KEY (room_id) REFERENCES rooms(room_id) ON DELETE CASCADE
);
