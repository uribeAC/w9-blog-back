import { model, Schema } from "mongoose";
import { PostStructure } from "../types.js";

const postSchema = new Schema<PostStructure>({
  publishDate: {
    type: Date,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Post = model("Post", postSchema, "Posts");

export default Post;
