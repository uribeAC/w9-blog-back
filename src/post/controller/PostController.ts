import { Request, Response } from "express";
import { Model } from "mongoose";
import { PostStructure } from "../types.js";
import { PostControllerStructure } from "./types.js";

class PostController implements PostControllerStructure {
  constructor(private postModel: Model<PostStructure>) {}

  public getPostsPage = async (req: Request, res: Response): Promise<void> => {
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
}

export default PostController;
