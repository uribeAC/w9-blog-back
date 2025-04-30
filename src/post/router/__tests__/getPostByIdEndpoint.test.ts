import { MongoMemoryServer } from "mongodb-memory-server";
import connectToDatabase from "../../../database/connectToDatabase.js";
import mongoose from "mongoose";
import request from "supertest";
import Post from "../../model/Post.js";
import {
  huevosRotosBruc159PostData,
  tortillaBetanzosPostData,
} from "../../postDataFixtures.js";
import app from "../../../server/app.js";
import { PostStructureDto } from "../../dto/types.js";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  const mongoDbConnectionString = server.getUri();

  await connectToDatabase(mongoDbConnectionString);
});

afterAll(async () => {
  mongoose.disconnect();
  await server.stop();
});

describe("Given the GET /posts/:postId endpoint for Huevos Rotos: el mejor plato de Bruc, 159 post Id", () => {
  describe("When it receives a request", () => {
    test("Then it should respon with a 200 status code and Huevos Rotos: el mejor plato de Bruc, 159 post", async () => {
      const posts = await Post.create(
        huevosRotosBruc159PostData,
        tortillaBetanzosPostData,
      );

      const huevosRotosId = posts.find(
        (post) => post.title === "Huevos Rotos: el mejor plato de Bruc, 159",
      )!._id;

      const response = await request(app).get(`/posts/${huevosRotosId}`);

      const body = response.body as { post: PostStructureDto };

      expect(response.status).toBe(200);

      expect(body.post.title).toBe("Huevos Rotos: el mejor plato de Bruc, 159");
    });
  });
});

describe("Given a GET /posts/AAAAAAAAAAAAAAAAAAAAAAAA endpoint for a non existing post", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with a 404 status code and a 'Post not found' error", async () => {
      const response = await request(app).get(
        `/posts/AAAAAAAAAAAAAAAAAAAAAAAA`,
      );

      const body = response.body as { error: string };

      expect(response.status).toBe(404);
      expect(body.error).toBe("Post not found");
    });
  });
});

describe("Given a GET /posts/12345 endpoint for a not valid post id", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with a 406 status code and a 'Id not valid' error", async () => {
      const response = await request(app).get(`/posts/12345`);

      const body = response.body as { error: string };

      expect(response.status).toBe(406);
      expect(body.error).toBe("Id not valid");
    });
  });
});
