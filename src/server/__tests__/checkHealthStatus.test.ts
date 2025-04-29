/* eslint-disable no-console */
import "dotenv/config";
import request from "supertest";

import express from "express";
import cors from "cors";
import handleErrors from "../middlewares/handleErrors/handleErrors.js";
import checkHealthStatus from "../middlewares/checkHealthStatus/checkHealthStatus.js";
import morgan from "morgan";

const app = express();

app.use(
  cors({
    origin(requestOrigin, callback) {
      const allowedOriginPatterns = process.env.ALLOWED_ORIGIN_PATTERNS;

      if (!allowedOriginPatterns) {
        callback(new Error("Not allowed origins"));
        return;
      }

      const originMatches = allowedOriginPatterns.split(",").some((pattern) => {
        const result = new RegExp(pattern).test(requestOrigin!);
        return result;
      });

      if (!requestOrigin || originMatches) {
        callback(null, true);
      } else {
        callback(new Error("Origin not allowed"));
      }
    },
    credentials: true,
  }),
);

app.use(morgan("dev"));

app.use(express.json());

app.get("/", checkHealthStatus);

app.use(handleErrors);

export default app;

describe("Given a GET / endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with a 200 status code and a 'pong' message", async () => {
      const response = await request(app).get("/");
      console.log(response.serverError);
      console.log(response.error);

      console.log(response.body);

      const body = response.body as { message: string };

      expect(response.status).toBe(200);
      expect(body.message).toBe("pong");
    });
  });
});
