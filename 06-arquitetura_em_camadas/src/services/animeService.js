import { AnimeRepository } from '../repositories/animeRepository.js';
import { Anime } from '../entities/anime.js';

export class AnimeService {
  constructor() {
    this.animeRepository = new AnimeRepository();
  }

  getAllAnimes() {
    return this.animeRepository.findAll();
  }

  getAnimeById(id) {
    return this.animeRepository.findById(id);
  }

  createAnime(data) {
    const { name, genre, studio } = data;
    if (!name || !genre || !studio) {
      throw new Error('All fields are required');
    }
    const anime = new Anime(null, name, genre, studio);
    return this.animeRepository.save(anime);
  }

  updateAnime(id, data) {
    const { name, genre, studio } = data;
    if (!name || !genre || !studio) {
      throw new Error('All fields are required');
    }
    const updatedAnime = this.animeRepository.update(id, data);
    if (!updatedAnime) {
      throw new Error('Anime not found');
    }
    return updatedAnime;
  }

  deleteAnime(id) {
    const deleted = this.animeRepository.delete(id);
    if (!deleted) {
      throw new Error('Anime not found');
    }
  }
}
