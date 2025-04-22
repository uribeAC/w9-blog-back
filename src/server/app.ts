import express from "express";
import morgan from "morgan";
import handleErrors from "./middlewares/handleErrors/handleErrors.js";

const app = express();

app.use(morgan("dev"));

app.get("/pokemons", (req, res, next) => {
  next(new Error("pokemon dosent exist"));
});

app.use(handleErrors);

export default app;
