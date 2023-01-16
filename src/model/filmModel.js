import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const { Schema } = mongoose;

const filmSchema = new Schema({
  title: { type: Schema.Types.String, required: true },
  year: { type: Schema.Types.Number, required: true },
  category: { type: Schema.Types.String, required: true },
  rating: { type: Schema.Types.String, required: true },
  isBookmarked: { type: Schema.Types.Boolean, required: true },
  isTrending: { type: Schema.Types.Boolean, required: true },
});

const Film = mongoose.model("Film", filmSchema);

export default Film;
