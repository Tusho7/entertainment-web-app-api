import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUpUser = async (req, res) => {
  const { email, password } = req.body;
  const { file } = req;
  console.log(file);

  if ((!email, !password)) {
    return res.status(400).json({ error: "Enter all required fields" });
  }

  const exist = await User.findOne({ email });
  if (exist) {
    return res
      .status(409)
      .json({ error: "An account with this email already exists" });
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const newUser = new User({
    email,
    password: hashedPassword,
    avatar: "/images/" + file.originalname,
  });

  const saveUser = await newUser.save();

  res.status(201).send();
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if ((!email, !password)) {
    return res.status(400).json({ error: "Enter all fields" });
  }

  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    return res.status(401).json({ error: "Wrong email or password" });
  }

  const isValidPassword = await bcrypt.compare(password, existingUser.password);
  if (!isValidPassword) {
    return res.status(401).json({ error: "Wrong email or password" });
  } else {
    const token = jwt.sign(
      {
        id: existingUser._id,
        email: existingUser.email,
        avatar: existingUser.avatar,
      },
      process.env.MONGO_SECRET
    );

    return res.status(201).json({ message: "Login successfully", token });
  }
};

let userId = 1;

export const getUser = async (_, res) => {
  const allUser = await User.find();
  const newUsers = allUser.map((users) => {
    return {
      id: userId++,
      email: users.email,
      password: users.password,
      avatar: users.avatar,
    };
  });
  res.status(200).json(newUsers);
};

export const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;

    jwt.verify(bearerToken, process.env.MONGO_SECRET, (err, authData) => {
      if (err) {
        return res.status(401).json({ error: "Token not valid" });
      } else {
        req.user = authData;
        next();
      }
    });
  } else {
    return res.status(401).json({ error: "No token provided" });
  }
};
