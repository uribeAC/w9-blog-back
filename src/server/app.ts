import express from "express";
import morgan from "morgan";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFound/handleEndpointNotFound.js";
import handleErrors from "./middlewares/handleErrors/handleErrors.js";
import checkHealthStatus from "./middlewares/checkHealthStatus/checkHealthStatus.js";
import postsRouter from "../post/router/postsRouter.js";

const app = express();

app.use(morgan("dev"));

app.get("/", checkHealthStatus);

app.use("/posts", postsRouter);

app.use(handleEndpointNotFound);

app.use(handleErrors);

export default app;
