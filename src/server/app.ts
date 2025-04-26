import express from "express";
import cors from "cors";
import morgan from "morgan";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFound/handleEndpointNotFound.js";
import handleErrors from "./middlewares/handleErrors/handleErrors.js";
import checkHealthStatus from "./middlewares/checkHealthStatus/checkHealthStatus.js";
import postsRouter from "../post/router/postsRouter.js";

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

app.get("/", checkHealthStatus);

app.use("/posts", postsRouter);

app.use(handleEndpointNotFound);

app.use(handleErrors);

export default app;
