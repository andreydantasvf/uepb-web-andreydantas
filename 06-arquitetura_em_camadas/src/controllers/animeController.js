import { AnimeService } from '../services/animeService.js';

export class AnimeController {
  constructor() {
    this.animeService = new AnimeService();
  }

  getAnimes(req, res) {
    const animes = this.animeService.getAllAnimes();
    res.json(animes);
  }

  getAnime(req, res) {
    const { id } = req.params;
    try {
      const anime = this.animeService.getAnimeById(id);
      anime ? res.json(anime) : res.status(404).json({ error: 'Anime not found' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  createAnime(req, res) {
    try {
      const anime = this.animeService.createAnime(req.body);
      res.status(201).json(anime);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  updateAnime(req, res) {
    const { id } = req.params;
    try {
      const anime = this.animeService.updateAnime(id, req.body);
      res.json(anime);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  deleteAnime(req, res) {
    const { id } = req.params;
    try {
      this.animeService.deleteAnime(id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}
