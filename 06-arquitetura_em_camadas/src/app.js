import express from 'express';
import { AnimeController } from './controllers/animeController.js';

export const app = express();
app.use(express.json());

const animeController = new AnimeController();

app.get('/animes', (req, res) => animeController.getAnimes(req, res));
app.get('/animes/:id', (req, res) => animeController.getAnime(req, res));
app.post('/animes', (req, res) => animeController.createAnime(req, res));
app.put('/animes/:id', (req, res) => animeController.updateAnime(req, res));
app.delete('/animes/:id', (req, res) => animeController.deleteAnime(req, res));
