import express from 'express';
import data from './data.js';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import postRouter from './routers/postRouter.js';

const app = express();
app.use(cors());


mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/blogPost', {
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
});

app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
app.get('/', (req, res) => {
  res.send('Server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});