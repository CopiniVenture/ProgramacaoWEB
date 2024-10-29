const express = require('express');
const app = express();
const AnimeController = require('./controllers/AnimeController');

app.use(express.json());

// Definindo as rotas para o CRUD de animes
app.get('/animes', AnimeController.getAllAnimes);
app.get('/animes/:id', AnimeController.getAnimeById);
app.post('/animes', AnimeController.createAnime);
app.put('/animes/:id', AnimeController.updateAnime);
app.delete('/animes/:id', AnimeController.deleteAnime);

module.exports = app;