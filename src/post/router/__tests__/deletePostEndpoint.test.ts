import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import app from "../../../server/app.js";
import connectToDatabase from "../../../database/connectToDatabase.js";
import { responseBodyError, responseBodyPost } from "../../types.js";
import {
  huevosRotosBruc159PostData,
  tortillaBetanzosPostData,
} from "../../postDataFixtures.js";
import Post from "../../model/Post.js";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  const mongoDbConnectionString = server.getUri();

  await connectToDatabase(mongoDbConnectionString);
});

afterEach(async () => {
  await Post.deleteMany(
    {
      title: "Tortilla de Betanzos: plato estrella en Casa Pepe",
    },
    { title: "Huevos Rotos: el mejor plato de Bruc, 159" },
  );
});

afterAll(async () => {
  mongoose.disconnect();
  await server.stop();
});

describe("Given the DELETE /posts/:postId endpoint", () => {
  describe("When it receives a request with postId as Huevos Rotos: el mejor plato de Bruc, 159 post Id", () => {
    test("Then it should respond with a 200 status code and Huevos Rotos: el mejor plato de Bruc, 159 post", async () => {
      const posts = await Post.create(
        huevosRotosBruc159PostData,
        tortillaBetanzosPostData,
      );

      const huevosRotosId = posts.find(
        (post) => post.title === "Huevos Rotos: el mejor plato de Bruc, 159",
      )!._id;

      const response = await request(app).delete(`/posts/${huevosRotosId}`);

      const body = response.body as responseBodyPost;

      expect(response.status).toBe(200);
      expect(body.post.title).toBe("Huevos Rotos: el mejor plato de Bruc, 159");
    });
  });

  describe("When it receives a request with a post Id that it's not in the database", () => {
    test("Then it should respond with a 404 status code and a 'Post not found' error", async () => {
      const response = await request(app).delete(
        `/posts/AAAAAAAAAAAAAAAAAAAAAAAA`,
      );

      const body = response.body as responseBodyError;

      expect(response.status).toBe(404);
      expect(body.error).toBe("Post not found");
    });
  });

  describe("When it receives a request with a not valid Id", () => {
    test("Then it should respond with a 400 status code and a 'Id not valid' error", async () => {
      const response = await request(app).delete(`/posts/12345`);

      const body = response.body as responseBodyError;

      expect(response.status).toBe(400);
      expect(body.error).toBe("Id not valid");
    });
  });
});
