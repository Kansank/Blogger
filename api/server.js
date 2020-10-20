import express from 'express';
import data from './data.js';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/posts/:id', (req, res) => {
  const post = data.posts.find( x => x._id === req.params.id);
  if (post) {
    res.send(post);
  } else {
    res.status(404).send({ message: 'Post Not Found'+req.params.id });
  }
});

app.get('/api/posts', (req, res) => {
  res.send(data.posts);
});

app.get('/', (req, res) => {
  res.send('Server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});