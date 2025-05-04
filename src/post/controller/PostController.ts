import { NextFunction, Request, Response } from "express";
import { Model } from "mongoose";
import { PostData, PostStructure } from "../types.js";
import { PostControllerStructure, PostRequest } from "./types.js";
import ServerError from "../../server/ServerError/ServerError.js";
import { PostDataDto } from "../dto/types.js";

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

  public addPost = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { author, content, imageAlt, imageUrl, publishDate, tags, title } =
      req.body as PostDataDto;

    const posts = await this.postModel.find().exec();

    if (
      posts.some((post) => post.title.toLowerCase() === title.toLowerCase())
    ) {
      const error = new ServerError(409, "Post already exists");

      next(error);

      return;
    }

    const newImageAlt = imageAlt ? imageAlt : `Plato de ${title.split(":")[0]}`;

    const trimmedTags = tags
      .replaceAll(/[.,;#]/g, " ")
      .replaceAll(/\s/g, " ")
      .split(" ")
      .filter((tag) => tag !== "");

    const createdPost: PostData = {
      author,
      content,
      imageUrl,
      smallImageUrl: imageUrl,
      detailImageUrl: imageUrl,
      imageAlt: newImageAlt,
      title,
      publishDate,
      tags: trimmedTags,
    };

    if (createdPost.publishDate === "") {
      delete createdPost.publishDate;
    }

    if (!createdPost.tags![0]) {
      delete createdPost.tags;
    }

    const addedPost = await this.postModel.insertOne(createdPost);

    res.status(201).json({ post: addedPost });
  };

  public deletePost = async (
    req: PostRequest,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const postId = req.params.postId;

    const deletedPost = await this.postModel
      .findOneAndDelete({ _id: postId })
      .exec();

    if (!deletedPost) {
      const error = new ServerError(404, "Post not found");
      next(error);

      return;
    }

    res.status(200).json({ post: deletedPost });
  };

  public getPostById = async (
    req: PostRequest,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const postId = req.params.postId;

    const foundPost = await this.postModel.findById({ _id: postId }).exec();

    if (!foundPost) {
      const error = new ServerError(404, "Post not found");

      next(error);

      return;
    }

    res.status(200).json({ post: foundPost });
  };
}

export default PostController;
