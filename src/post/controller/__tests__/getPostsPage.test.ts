import { Model } from "mongoose";
import { Request, Response } from "express";
import { PostStructure } from "../../types.js";
import PostController from "../PostController.js";
import { animeFoodPosts } from "../../fixtures.js";

let originalAnimeFoodPosts = [...animeFoodPosts];

beforeEach(() => {
  originalAnimeFoodPosts = [...animeFoodPosts];
  jest.clearAllMocks();
});

describe("Given the getPostsPage controller of PostController", () => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as Pick<Response, "status" | "json">;

  describe("When it receives a response", () => {
    const req = {
      params: { page: "" },
    } as Pick<Request, "params">;

    const postModel: Pick<Model<PostStructure>, "find" | "countDocuments"> = {
      find: jest.fn().mockReturnValue({
        sort: jest.fn().mockReturnValue({
          skip: jest.fn().mockReturnValue({
            limit: jest.fn().mockReturnValue({
              exec: jest
                .fn()
                .mockResolvedValue(originalAnimeFoodPosts.slice(0, 5)),
            }),
          }),
        }),
      }),
      countDocuments: jest
        .fn()
        .mockResolvedValue(originalAnimeFoodPosts.length),
    };

    test("Then it should call the response's method status with 200", async () => {
      const postController = new PostController(
        postModel as Model<PostStructure>,
      );

      await postController.getPostsPage(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    test("Then it should call the response's method json with 5 posts", async () => {
      const expectedPostsPage = animeFoodPosts.slice(0, 5);

      const postController = new PostController(
        postModel as Model<PostStructure>,
      );

      await postController.getPostsPage(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ posts: expectedPostsPage }),
      );
    });

    test("Then it should call the response's method json with 11 as a total number of posts", async () => {
      const expectedPostsTotal = animeFoodPosts.length;

      const postController = new PostController(
        postModel as Model<PostStructure>,
      );

      await postController.getPostsPage(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ postsTotal: expectedPostsTotal }),
      );
    });
  });

  describe("When it receives a request with page 2", () => {
    const pageNumber = 2;

    const req = {
      params: { page: pageNumber.toString() },
    } as Pick<Request, "params">;

    const postModel: Pick<Model<PostStructure>, "find" | "countDocuments"> = {
      find: jest.fn().mockReturnValue({
        sort: jest.fn().mockReturnValue({
          skip: jest.fn().mockReturnValue({
            limit: jest.fn().mockReturnValue({
              exec: jest
                .fn()
                .mockResolvedValue(
                  originalAnimeFoodPosts
                    .sort(
                      (postA: PostStructure, postB: PostStructure) =>
                        postB.publishDate.getTime() -
                        postA.publishDate.getTime(),
                    )
                    .slice(5, 10),
                ),
            }),
          }),
        }),
      }),
      countDocuments: jest
        .fn()
        .mockResolvedValue(originalAnimeFoodPosts.length),
    };

    test("Then it should call the response's method json with posts from 6 to 10", async () => {
      const expectedPostsPage2 = originalAnimeFoodPosts
        .sort(
          (postA: PostStructure, postB: PostStructure) =>
            postB.publishDate.getTime() - postA.publishDate.getTime(),
        )
        .slice(5, 10);

      const postController = new PostController(
        postModel as Model<PostStructure>,
      );

      await postController.getPostsPage(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ posts: expectedPostsPage2 }),
      );
    });
  });
});
