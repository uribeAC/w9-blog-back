import { Router } from "express";
import PostController from "../controller/PostController.js";
import Post from "../model/Post.js";
import isValidId from "../../server/middlewares/isValidId/isValidId.js";

const postsRouter = Router();

const postController = new PostController(Post);

postsRouter.get("/", postController.getPostsPage);

postsRouter.get("/:postId", isValidId, postController.getPostById);

postsRouter.post("/", postController.addPost);

postsRouter.delete("/:postId", isValidId, postController.deletePost);

export default postsRouter;
