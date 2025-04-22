import ServerError from "../../ServerError/ServerError.js";
import { NextFunction, Request, Response } from "express";
import handleEndpointNotFound from "./handleEndpointNotFound.js";

describe("Given the handleEndpointNotFound middleware", () => {
  describe("When it recieives a next function", () => {
    test("Then it should call the next function with an error 'Endpoint not found' and a status code '404'", () => {
      const error = new ServerError(404, "Endpoint not found");

      const next = jest.fn();

      handleEndpointNotFound(
        {} as Request,
        {} as Response,
        next as NextFunction,
      );

      expect(next).toHaveBeenCalledWith(
        expect.objectContaining({ message: error.message }),
      );
      expect(next).toHaveBeenCalledWith(
        expect.objectContaining({ statusCode: error.statusCode }),
      );
    });
  });
});
