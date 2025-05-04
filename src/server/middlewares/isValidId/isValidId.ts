import { NextFunction, Response } from "express";
import mongoose from "mongoose";
import { PostRequest } from "../../../post/controller/types.js";
import ServerError from "../../ServerError/ServerError.js";

const isValidId = async (
  req: PostRequest,
  _res: Response,
  next: NextFunction,
): Promise<void> => {
  const postId = req.params.postId;

  const isValidId = mongoose.isValidObjectId(postId);

  if (!isValidId) {
    const error = new ServerError(400, "Id not valid");

    next(error);

    return;
  }

  next();
};

export default isValidId;
