import express from "express";
import {
  getUser,
  loginUser,
  signUpUser,
} from "../controllers/userController.js";
import multer from "multer";

const userRouter = express.Router();

const fileStorage = multer.diskStorage({
  destination: (_, file, cb) => {
    cb(null, "public/storage");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (_, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

userRouter.post(
  "/auth/signup",
  multer({ storage: fileStorage, fileFilter }).single("avatar"),
  signUpUser
);

userRouter.post("/user/login", loginUser);

userRouter.get("/users", getUser);

export default userRouter;
