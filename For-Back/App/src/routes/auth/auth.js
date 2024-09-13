/*=============================
    Importation des dépendances
===============================*/
const express = require('express');
const router = express.Router();
const db = require('../../config/db');
const bcrypt = require('bcrypt');


/*=============================
    Start route register
===============================*/
router.post("/register", async (req, res) => {
    // Parser les informations du nouveau utilisateur
    const {first_name, last_name, email, password, confirm_password} = req.body;
    // Vérifier la validité des informations
    if (!first_name || !last_name || !email || !password || !confirm_password || password !== confirm_password) return res.send({msg: "Informations requises."});

    // Vérifier si le user existe déjà dans la base de données
    db.query('SELECT * FROM users WHERE email = ?', [email], async (error, result) => {
        if (error) return res.send({msg: "Error de base de données"});
        if (result.length > 0) return res.send({msg: "Cet utilisateur existe déjà !"});

        // hasher le mot de pass de l'utilisateur
        const hashed_pass = await bcrypt.hash(password, 10);

        // Insérer le user dans la base de données
        db.query('INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)', [first_name, last_name, email, hashed_pass], (error, result) => {
            if (error) return res.send({msg: "Erreur lors de l'insertion du user"});
            res.send("User inseré avec succès");
        });
    });
});
/*=============================
    End route register
===============================*/

// Exportation du router
module.exports = router;