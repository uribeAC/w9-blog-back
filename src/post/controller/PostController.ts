import { Request, Response } from "express";
import { PostStructure } from "../types.js";
import { PostControllerStructure } from "./types.js";
import { Model } from "mongoose";

class PostController implements PostControllerStructure {
  constructor(private postModel: Model<PostStructure>) {}

  public async getPostsPage(req: Request, res: Response): Promise<void> {
    let { page } = req.params;

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
  }
}

export default PostController;
