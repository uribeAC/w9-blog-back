import { NextFunction, Response } from "express";
import ServerError from "../../ServerError/ServerError.js";
import isValidId from "./isValidId.js";
import { PostRequest } from "../../../post/controller/types.js";

describe("Given the isValidId middleware", () => {
  describe("When it receives a not valid Id and a next function", () => {
    test("Then it should call the next function with with 400, 'Id not valid' error", async () => {
      const error = new ServerError(400, "Id not valid");
      const req = {
        params: { postId: "12345" },
      } as Pick<PostRequest, "params">;
      const next = jest.fn();

      await isValidId(req as PostRequest, {} as Response, next as NextFunction);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe("When it receives a valid Id and a next function", () => {
    test("Then it should call the next function", async () => {
      const error = new ServerError(400, "Id not valid");
      const req = {
        params: { postId: "123451234512345123451234" },
      } as Pick<PostRequest, "params">;
      const next = jest.fn();

      await isValidId(req as PostRequest, {} as Response, next as NextFunction);

      expect(next).toHaveBeenCalledWith();
      expect(next).not.toHaveBeenCalledWith(error);
    });
  });
});
