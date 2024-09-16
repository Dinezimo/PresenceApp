/*=============================
    Importation des dépendances
===============================*/
const mysql = require('mysql2');
const dotenv = require('dotenv').config();

/*=============================
    création de la cnnection de
    la base de donnée 
===============================*/
const db = mysql.createConnection({
    host: process.env.APP_HOST,
    user: process.env.APP_USER,
    password: process.env.APP_PASSWORD,
    database: process.env.APP_DATABASE
});

/*=============================
    Connection de la base de
    données au server
===============================*/
db.connect((error) => {
    if (error) {
        return console.log(error);
    }
    console.log('Connecté à la base de données avec succès.');
});

/*=============================
    Exportation de la base de
    données vers le server
===============================*/
module.exports = db;