import { MongoMemoryServer } from "mongodb-memory-server";
import request from "supertest";
import mongoose from "mongoose";
import connectToDatabase from "../../../database/connectToDatabase.js";
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

describe("Given the GET /posts endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with a 200 status code and Huevos Rotos: el mejor plato de Bruc, 159 and Tortilla de Betanzos: plato estrella en Casa Pepe posts", async () => {
      await Post.create(huevosRotosBruc159PostData, tortillaBetanzosPostData);

      const response = await request(app).get("/posts");

      const body = response.body as {
        posts: PostStructureDto[];
        postsTotal: number;
      };

      expect(body.posts).toContainEqual(
        expect.objectContaining({
          title: "Tortilla de Betanzos: plato estrella en Casa Pepe",
        }),
      );

      expect(body.posts).toContainEqual(
        expect.objectContaining({
          title: "Huevos Rotos: el mejor plato de Bruc, 159",
        }),
      );

      expect(body.postsTotal).toBe(2);
    });
  });
});
