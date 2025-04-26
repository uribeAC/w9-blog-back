import { Request, Response } from "express";
import { Model } from "mongoose";
import { PostData, PostStructure } from "../types.js";
import { PostControllerStructure, PostRequest } from "./types.js";
import ServerError from "../../server/ServerError/ServerError.js";

class PostController implements PostControllerStructure {
  constructor(private postModel: Model<PostStructure>) {}

  public getPostsPage = async (
    req: PostRequest,
    res: Response,
  ): Promise<void> => {
    let page = req.query.page;

    if (!page) {
      page = "1";
    }

    const postsTotal = await this.postModel.countDocuments();

    const posts = await this.postModel
      .find()
      .sort({ publishDate: -1 })
      .skip((Number(page) - 1) * 5)
      .limit(5)
      .exec();

    res.status(200).json({ posts: posts, postsTotal: postsTotal });
  };

  public addPost = async (req: Request, res: Response): Promise<void> => {
    const newPost = req.body as PostData;

    const posts = await this.postModel.find().exec();

    if (
      posts.some(
        (post) => post.title.toLowerCase() === newPost.title.toLowerCase(),
      )
    ) {
      const error = new ServerError(404, "Post already exists");

      res.status(error.statusCode).json(error.message);
      return;
    }

    this.postModel.insertOne(newPost);

    res.status(201).json(newPost);
  };
}

export default PostController;
