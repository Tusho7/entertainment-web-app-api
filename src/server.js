import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectToMongo from "./config/mongo.js";
import filmRouter from "./routes/filmRouters.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";
import userRouter from "./routes/userRouter.js";

const app = express();
dotenv.config();
connectToMongo();

app.use(bodyParser.json());
app.use(cors());
app.use("/images", express.static("public/storage"));

app.use("/api", filmRouter);
app.use("/api", userRouter);
app.use("/", ...swaggerMiddleware());

app.listen(process.env.PORT || 3000);
