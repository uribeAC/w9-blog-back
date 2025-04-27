import { Router } from "express";
import PostController from "../controller/PostController.js";
import Post from "../model/Post.js";

const postsRouter = Router();

const postController = new PostController(Post);

postsRouter.get("/", postController.getPostsPage);

postsRouter.delete("/:postId", postController.deletePost);

export default postsRouter;
