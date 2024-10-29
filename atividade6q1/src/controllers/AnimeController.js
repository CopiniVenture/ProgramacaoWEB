const AnimeService = require('../services/AnimeService');

class AnimeController {
  getAllAnimes(req, res) {
    try {
      const animes = AnimeService.getAllAnimes();
      res.json(animes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  getAnimeById(req, res) {
    try {
      const anime = AnimeService.getAnimeById(req.params.id);
      if (anime) {
        res.json(anime);
      } else {
        res.status(404).json({ error: 'Anime não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  createAnime(req, res) {
    try {
      const { name, genre, studio } = req.body;
      const newAnime = AnimeService.createAnime(name, genre, studio);
      res.status(201).json(newAnime);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  updateAnime(req, res) {
    try {
      const { name, genre, studio } = req.body;
      const updatedAnime = AnimeService.updateAnime(req.params.id, name, genre, studio);
      if (updatedAnime) {
        res.json(updatedAnime);
      } else {
        res.status(404).json({ error: 'Anime não encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  deleteAnime(req, res) {
    try {
      const deletedAnime = AnimeService.deleteAnime(req.params.id);
      if (deletedAnime) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Anime não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new AnimeController();