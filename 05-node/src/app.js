import express from 'express';

export const app = express();
app.use(express.json());

const animes = [
  { id: 1, name: 'Naruto', genre: 'Action', studio: 'Pierrot' }
];

app.get('/animes', (req, res) => {
  res.json(animes);
});

app.get('/animes/:id', (req, res) => {
  const { id } = req.params;
  const anime = animes.find(a => a.id === parseInt(id));
  anime ? res.json(anime) : res.status(404).json({ error: 'Anime not found' });
});

app.post('/animes', (req, res) => {
  const { name, genre, studio } = req.body;
  if (!name || !genre || !studio) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  const newAnime = {
    id: animes.length + 1,
    name,
    genre,
    studio
  };
  animes.push(newAnime);
  res.status(201).json(newAnime);
});

app.put('/animes/:id', (req, res) => {
  const { id } = req.params;
  const { name, genre, studio } = req.body;
  const anime = animes.find(a => a.id === parseInt(id));

  if (!anime) {
    return res.status(404).json({ error: 'Anime not found' });
  }
  if (!name || !genre || !studio) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  anime.name = name;
  anime.genre = genre;
  anime.studio = studio;
  res.json(anime);
});

app.delete('/animes/:id', (req, res) => {
  const { id } = req.params;
  const index = animes.findIndex(a => a.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'Anime not found' });
  }

  animes.splice(index, 1);
  res.status(204).send();
});

