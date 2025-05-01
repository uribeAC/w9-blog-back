import { MongoMemoryServer } from "mongodb-memory-server";
import connectToDatabase from "../../../database/connectToDatabase.js";
import mongoose from "mongoose";
import request from "supertest";
import app from "../../../server/app.js";
import { tortillaBetanzosPostData } from "../../postDataFixtures.js";
import Post from "../../model/Post.js";
import { responseBodyError, responseBodyPost } from "../../types.js";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  const mongoDbConnectionString = server.getUri();

  await connectToDatabase(mongoDbConnectionString);
});

afterEach(async () => {
  await Post.findOneAndDelete({
    title: "Tortilla de Betanzos: plato estrella en Casa Pepe",
  });
});

afterAll(async () => {
  mongoose.disconnect();
  await server.stop();
});

describe("Given the POST /posts endpoint", () => {
  describe("When it receives a request with Tortilla de Betanzos: plato estrella en Casa Pepe post data", () => {
    test("Then it should respond with a 201 status code and Tortilla de Betanzos: plato estrella en Casa Pepe post", async () => {
      const response = await request(app)
        .post("/posts")
        .send(tortillaBetanzosPostData)
        .set("Content-Type", "application/json")
        .set("Accept", "application/json");

      const body = response.body as responseBodyPost;

      expect(response.status).toBe(201);
      expect(body.post.title).toBe(
        "Tortilla de Betanzos: plato estrella en Casa Pepe",
      );
    });

    describe("And the post is already in the database", () => {
      test("Then it should respon with a 409 status code and a 'Post already exists' error", async () => {
        await Post.create(tortillaBetanzosPostData);

        const response = await request(app)
          .post("/posts")
          .send(tortillaBetanzosPostData)
          .set("Content-Type", "application/json")
          .set("Accept", "application/json");

        const body = response.body as responseBodyError;

        expect(response.status).toBe(409);
        expect(body.error).toBe("Post already exists");
      });
    });
  });
});
