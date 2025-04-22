import express from "express";
import morgan from "morgan";
import handleErrors from "./middlewares/handleErrors/handleErrors.js";

const app = express();

app.use(morgan("dev"));

app.use(handleErrors);

export default app;
