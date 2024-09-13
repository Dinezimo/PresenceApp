/*=============================
    Importation des dépendances
===============================*/
const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT;
const db = require('./config/db');

// Utilisation du framework express de Nodejs
app.use(express.json());

// Route authentification
const authRoute = require('./routes/auth/auth');
app.use('/', authRoute); 

/*=============================
    --- Start Routes ---
===============================*/
app.get('/', (req, res) => {
    res.send('Bonjour à tous, notre application de présence wow');
});
 
app.get('/register', (req, res) => {
    res.send(res.msg);
});
/*=============================
   --- End Routes ---
===============================*/


/*=============================
    Lancement du server
===============================*/
app.listen(port, ()=> {
    console.log(`App-Presence en exécution sur http://localhost:${port}`);
});

