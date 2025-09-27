const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie'))
    .catch(err => console.error('Erreur de connexion à MongoDB:', err));

app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API de la Gestion Cloud !');
});

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});