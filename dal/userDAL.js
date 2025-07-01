import { Usermodel } from "../models/userModel.js";

export const findUserByName = async (username) => {
  return await Usermodel.findOne({ username });
};
export const createUser = async (userData) => {
  const user = new Usermodel(userData);
  return await user.save();
};
