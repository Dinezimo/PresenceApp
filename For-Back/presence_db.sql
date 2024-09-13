/*=============================
    Création de la base de 
    données app_presence
===============================*/

CREATE DATABASE IF NOT EXISTS presence_db;

/*=============================
    Utilisation de la base de
    données app_presence
===============================*/

USE presence_db;


/*=============================
    Création de la table users
===============================*/

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,  
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,  
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    profile_picture VARCHAR(255)
);