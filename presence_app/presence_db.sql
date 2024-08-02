DROP DATABASE IF EXISTS presence_db;
CREATE DATABASE presence_db;
USE presence_db;

CREATE TABLE Institutions (
    institution_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    photo VARCHAR(255) DEFAULT "./assets/university.png",
    status ENUM('lite', 'institution', 'others') DEFAULT 'others',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    description TEXT DEFAULT 'Empty',
    team_number INT,
    contacts INT NOT NULL,
    pack ENUM('freepack', 'advanced_pack') 
);


CREATE TABLE Rooms (
    room_id INT AUTO_INCREMENT PRIMARY KEY,
    institution_id INT,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_institution_room FOREIGN KEY (institution_id) REFERENCES Institutions(institution_id) ON DELETE CASCADE
);


CREATE TABLE Groups (
    group_id INT AUTO_INCREMENT PRIMARY KEY,
    group_responsible_id INT NOT NULL,
    institution_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    photo VARCHAR(255) DEFAULT "./assets/group.jpg",
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_institution_group FOREIGN KEY (institution_id) REFERENCES Institutions(institution_id) ON DELETE CASCADE
);


CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    institution_id INT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('student', 'teacher', 'admin', 'userlite') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_institution_user FOREIGN KEY (institution_id) REFERENCES Institutions(institution_id) ON DELETE CASCADE
);


CREATE TABLE Group_users (
    group_user_id INT AUTO_INCREMENT PRIMARY KEY,
    group_id INT,
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_group_user FOREIGN KEY (group_id) REFERENCES Groups(group_id) ON DELETE CASCADE,
    CONSTRAINT fk_user_group_user FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);


CREATE TABLE Group_responsibles (
    group_responsible_id INT AUTO_INCREMENT PRIMARY KEY,
    group_id INT,
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_group_responsible FOREIGN KEY (group_id) REFERENCES Groups(group_id) ON DELETE CASCADE,
    CONSTRAINT fk_user_group_responsible FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);


CREATE TABLE Schedules (
    schedule_id INT AUTO_INCREMENT PRIMARY KEY,
    group_id INT,
    day_of_week INT NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_group_schedule FOREIGN KEY (group_id) REFERENCES Groups(group_id) ON DELETE CASCADE
);


CREATE TABLE Sessions (
    session_id INT AUTO_INCREMENT PRIMARY KEY,
    group_id INT,
    schedule_id INT,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_group_session FOREIGN KEY (group_id) REFERENCES Groups(group_id) ON DELETE CASCADE,
    CONSTRAINT fk_schedule_session FOREIGN KEY (schedule_id) REFERENCES Schedules(schedule_id) ON DELETE CASCADE
);


CREATE TABLE Attendance (
    attendance_id INT AUTO_INCREMENT PRIMARY KEY,
    session_id INT,
    user_id INT,
    status ENUM('present', 'absent', 'excused') NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_session_attendance FOREIGN KEY (session_id) REFERENCES Sessions(session_id) ON DELETE CASCADE,
    CONSTRAINT fk_user_attendance FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);


CREATE TABLE Notifications (
    notification_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    message TEXT NOT NULL,
    photo VARCHAR(255) DEFAULT "./assets/group.jpg",
    type ENUM('AddingRequest', 'others') DEFAULT 'others',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user_notification FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);


CREATE TABLE Reports (
    report_id INT AUTO_INCREMENT PRIMARY KEY,
    institution_id INT,
    generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    content TEXT NOT NULL,
    CONSTRAINT fk_institution_report FOREIGN KEY (institution_id) REFERENCES Institutions(institution_id) ON DELETE CASCADE
);


CREATE TABLE Profiles (
    profile_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    photo VARCHAR(255),
    biometric_data TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user_profile FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);


CREATE TABLE Cameras (
    camera_id INT AUTO_INCREMENT PRIMARY KEY,
    institution_id INT,
    room_id INT,
    location VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_institution_camera FOREIGN KEY (institution_id) REFERENCES Institutions(institution_id) ON DELETE CASCADE,
    CONSTRAINT fk_room_camera FOREIGN KEY (room_id) REFERENCES Rooms(room_id) ON DELETE CASCADE
);


CREATE TABLE Beacons (
    beacon_id INT AUTO_INCREMENT PRIMARY KEY,
    institution_id INT,
    room_id INT,
    location VARCHAR(255) NOT NULL,
    uuid VARCHAR(255) NOT NULL,
    major INT NOT NULL,
    minor INT NOT NULL,
    `range` INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_institution_beacon FOREIGN KEY (institution_id) REFERENCES Institutions(institution_id) ON DELETE CASCADE,
    CONSTRAINT fk_room_beacon FOREIGN KEY (room_id) REFERENCES Rooms(room_id) ON DELETE CASCADE
);

ALTER TABLE Institutions MODIFY pack VARCHAR(50);
ALTER TABLE Notifications ADD UNIQUE (user_id, message);