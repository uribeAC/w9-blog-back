import express from "express";
import morgan from "morgan";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFound/handleEndpointNotFound.js";
import handleErrors from "./middlewares/handleErrors/handleErrors.js";

const app = express();

app.use(morgan("dev"));

app.use(handleEndpointNotFound);

app.use(handleErrors);

export default app;
