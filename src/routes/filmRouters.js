import express from "express";
import { getFilms } from "../controllers/filmController.js";

const filmRouter = express.Router();

filmRouter.get("/films", getFilms);

export default filmRouter;
