import express from "express";
import morgan from "morgan";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFound/handleEndpointNotFound.js";
import handleErrors from "./middlewares/handleErrors/handleErrors.js";
import checkHealthStatus from "./middlewares/checkHealthStatus/checkHealthStatus.js";

const app = express();

app.use(morgan("dev"));

app.use(handleEndpointNotFound);

app.use("/", checkHealthStatus);

app.use(handleErrors);

export default app;
