const Anime = require('../entities/Anime');

class AnimeRepository {
  constructor() {
    this.animes = [
      new Anime('Naruto', 'Shonen', 'Pierrot'),
      new Anime('Dandadan', 'Supernatural', 'Science Saru'),
      new Anime('One Piece', 'Shonen', 'Toei Animation'),
      new Anime('Dragon Ball Z', 'Shonen', 'Toei Animation')
    ];
  }

  findAll() {
    return this.animes;
  }

  findById(id) {
    return this.animes.find(anime => anime.id === id);
  }

  create(anime) {
    this.animes.push(anime);
    return anime;
  }

  update(id, updatedAnime) {
    const index = this.animes.findIndex(anime => anime.id === id);
    if (index !== -1) {
      this.animes[index] = updatedAnime;
      return updatedAnime;
    }
    return null;
  }

  delete(id) {
    const index = this.animes.findIndex(anime => anime.id === id);
    if (index !== -1) {
      return this.animes.splice(index, 1);
    }
    return null;
  }
}

module.exports = new AnimeRepository();