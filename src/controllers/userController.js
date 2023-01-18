import User from "../model/userModel.js";

export const signUpUser = async (req, res) => {
  const { email, password } = req.body;
  const { file } = req;

  if ((!email, !password)) {
    return res.status(400).json({ error: "Enter all required fields" });
  }

  const exist = await User.findOne({ email });
  if (exist) {
    return res
      .status(400)
      .json({ error: "An account with this email already exists" });
  }

  const newUser = new User({
    email,
    password,
    avatar: file.originalname,
  });

  const saveUser = await newUser.save();

  res.status(201).send();
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
