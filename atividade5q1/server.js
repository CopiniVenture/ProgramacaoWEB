const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');

app.use(express.json());

let animes = [
    {
      id: uuidv4(),
      name: 'Naruto',
      genre: 'Shonen',
      studio: 'Pierrot'
    },
    {
        id: uuidv4(),
        name: 'Dandadan',
        genre: 'Supernatural',
        studio: 'Science Saru'
      },
      {
        id: uuidv4(),
        name: 'One Piece',
        genre: 'Shonen',
        studio: 'Toei Animation'
      },
      {
        id: uuidv4(),
        name: 'Dragon Ball Z',
        genre: 'Shonen',
        studio: 'Toei Animation'
      }     

  ];
  
  // Listar todos os animes (READ)
  app.get('/animes', (req, res) => {
    res.json(animes);
  });
  
  // Listar um anime por ID (READ)
  app.get('/animes/:id', (req, res) => {
    const { id } = req.params;
    const anime = animes.find(anime => anime.id === id);
  
    if (anime) {
      res.json(anime);
    } else {
      res.status(404).json({ error: 'Anime não encontrado' });
    }
  });
  
  // Criar um novo anime (CREATE)
  app.post('/animes', (req, res) => {
    const { name, genre, studio } = req.body;
  
    // Validação para evitar campos em branco
    if (!name || !genre || !studio) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
    }
  
    const newAnime = {
      id: uuidv4(),
      name,
      genre,
      studio
    };
  
    animes.push(newAnime);
    res.status(201).json(newAnime);
  });
  
  // Atualizar um anime por ID (UPDATE)
  app.put('/animes/:id', (req, res) => {
    const { id } = req.params;
    const { name, genre, studio } = req.body;
    const animeIndex = animes.findIndex(anime => anime.id === id);
  
    if (animeIndex !== -1) {
      // Validação para evitar campos em branco
      if (!name || !genre || !studio) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
      }
  
      animes[animeIndex] = { id, name, genre, studio };
      res.json(animes[animeIndex]);
    } else {
      res.status(404).json({ error: 'Anime não encontrado' });
    }
  });
  
  // Deletar um anime por ID (DELETE)
  app.delete('/animes/:id', (req, res) => {
    const { id } = req.params;
    const animeIndex = animes.findIndex(anime => anime.id === id);
  
    if (animeIndex !== -1) {
      animes.splice(animeIndex, 1);
      res.status(204).send(); // Sem conteúdo
    } else {
      res.status(404).json({ error: 'Anime não encontrado' });
    }
  });
  app.listen(3000, () => console.log('Servidor rodando na porta 3000'));