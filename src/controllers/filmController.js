import Film from "../model/filmModel.js";

export const getFilms = async (req, res) => {
  const data = await Film.find();
  return res.json(data);
};
