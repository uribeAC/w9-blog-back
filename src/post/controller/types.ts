import { Request, Response } from "express";

export interface PostControllerStructure {
  getPostsPage: (req: Request, res: Response) => void;
}
