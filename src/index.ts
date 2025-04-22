import startServer from "./server/startServer.js";
import "dotenv/config";

const port = process.env.PORT || 4000;

startServer(Number(port));
