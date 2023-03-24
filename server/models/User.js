import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: "string",
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: "string",
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: "string",
      required: true,
      min: 8,
    },
    picturePath: {
      type: "string",
      default: "",
    },
    frineds: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
