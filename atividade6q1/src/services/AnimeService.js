const AnimeRepository = require('../repositories/AnimeRepository');
const Anime = require('../entities/Anime');

class AnimeService {
  getAllAnimes() {
    return AnimeRepository.findAll();
  }

  getAnimeById(id) {
    return AnimeRepository.findById(id);
  }

  createAnime(name, genre, studio) {
    if (!name || !genre || !studio) {
      throw new Error('Todos os campos são obrigatórios!');
    }
    const newAnime = new Anime(name, genre, studio);
    return AnimeRepository.create(newAnime);
  }

  updateAnime(id, name, genre, studio) {
    const anime = AnimeRepository.findById(id);
    if (!anime) {
      throw new Error('Anime não encontrado');
    }
    if (!name || !genre || !studio) {
      throw new Error('Todos os campos são obrigatórios!');
    }
    const updatedAnime = { id, name, genre, studio };
    return AnimeRepository.update(id, updatedAnime);
  }

  deleteAnime(id) {
    return AnimeRepository.delete(id);
  }
}

module.exports = new AnimeService();