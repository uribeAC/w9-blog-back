import { NextFunction, Request, Response } from "express";

export interface PostControllerStructure {
  getPostsPage: (req: PostRequest, res: Response) => Promise<void>;
  addPost: (req: Request, res: Response, next: NextFunction) => Promise<void>;
  deletePost: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
}

export type PostRequest = Request<
  PostParams,
  Record<string, unknown>,
  Record<string, unknown>,
  PostQuery
>;

export type PostQuery = {
  page: string;
};

export type PostParams = {
  postId: string;
};
