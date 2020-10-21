import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Post from '../models/postModel.js';

const postRouter = express.Router();

postRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const posts = await Post.find({});
    res.send(posts);
  })
);

postRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    // await Post.remove({});
    const createdPosts = await Post.insertMany(data.posts);
    res.send({ createdPosts });
  })
);

postRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (post) {
      res.send(post);
    } else {
      res.status(404).send({ message: 'Post Not Found' });
    }
  })
);

export default postRouter;