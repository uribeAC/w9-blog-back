import "dotenv/config";
import startServer from "./server/startServer.js";
import connectToDatabase from "./database/connectToDatabase.js";

const port = process.env.PORT || 4000;

await connectToDatabase(
  "mongodb+srv://IsaSaete:IsaSaete@julian-cluster0.3u5nph9.mongodb.net/Blog",
);

startServer(Number(port));
