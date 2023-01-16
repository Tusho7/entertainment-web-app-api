import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";

import connectToMongo from "./config/mongo.js";
import filmRouter from "./routes/filmRouters.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";

const app = express();
dotenv.config();
connectToMongo();

app.use(bodyParser.json());

app.use("/api", filmRouter);
app.use("/", ...swaggerMiddleware());

app.listen(3000);
