import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    slug: { type: String, required: true },
    postedOn: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String, required: true },
    text: { type: String, required: true },
    Recommended: { type: Boolean,default: false, required: true },
    
  },
  {
    timestamps: true,
  }
);
const Post = mongoose.model('Post', postSchema);

export default Post;