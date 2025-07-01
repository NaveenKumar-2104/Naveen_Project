import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

export const Usermodel = model("user", userSchema);
