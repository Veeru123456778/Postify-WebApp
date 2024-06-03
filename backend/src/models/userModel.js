import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },
    name: {
      type: String,
    },
    profile_picture: {
      type: String,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model.User || mongoose.model("User", userSchema);

export default userModel;
