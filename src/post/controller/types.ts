import { NextFunction, Request, Response } from "express";

export interface PostControllerStructure {
  getPostsPage: (req: PostRequest, res: Response) => Promise<void>;
  addPost: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

export type PostRequest = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  Record<string, unknown>,
  PostQuery
>;

export type PostQuery = {
  page: string;
};
