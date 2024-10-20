import { Anime } from '../entities/anime.js';

export class AnimeRepository {
  constructor() {
    this.animes = [
      new Anime(1, 'Naruto', 'Action', 'Pierrot')
    ];
  }

  findAll() {
    return this.animes;
  }

  findById(id) {
    return this.animes.find(a => a.id === parseInt(id));
  }

  save(anime) {
    anime.id = this.animes.length + 1;
    this.animes.push(anime);
    return anime;
  }

  update(id, { name, genre, studio }) {
    const anime = this.findById(id);
    if (anime) {
      anime.name = name;
      anime.genre = genre;
      anime.studio = studio;
      return anime;
    }
    return null;
  }

  delete(id) {
    const index = this.animes.findIndex(a => a.id === parseInt(id));
    if (index !== -1) {
      this.animes.splice(index, 1);
      return true;
    }
    return false;
  }
}
