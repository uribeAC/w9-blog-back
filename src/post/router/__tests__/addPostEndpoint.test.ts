import { MongoMemoryServer } from "mongodb-memory-server";
import connectToDatabase from "../../../database/connectToDatabase.js";
import mongoose from "mongoose";
import request from "supertest";
import app from "../../../server/app.js";
import { tortillaBetanzosPostData } from "../../postDataFixtures.js";
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

describe("Given the POST /posts endpoint", () => {
  describe("When it receives a request with Tortilla de Betanzos: plato estrella en Casa Pepe post data", () => {
    test("Then it should respond with a 201 status code and Tortilla de Betanzos: plato estrella en Casa Pepe post", async () => {
      const response = await request(app)
        .post("/posts")
        .send(tortillaBetanzosPostData)
        .set("Content-Type", "application/json")
        .set("Accept", "application/json");

      const body = response.body as {
        post: PostStructureDto;
      };

      expect(response.status).toBe(201);
      expect(body.post.title).toBe(
        "Tortilla de Betanzos: plato estrella en Casa Pepe",
      );
    });
  });
});
