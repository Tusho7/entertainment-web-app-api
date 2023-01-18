import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  avatar: {
    type: Schema.Types.String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
