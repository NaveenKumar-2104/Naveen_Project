import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findUserByName, createUser } from "../dal/userDAL.js"; // <-- You must have this in your DAL
import { appConfig } from "../config/config.js";

/**
 * Service for user login
 */
export const loginService = async (username, password) => {
  const user = await findUserByName(username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    { id: user._id },
    appConfig.jwt_key,
    { expiresIn: "1h" }
  );
  return { user, token };
};

/**
 * Service for user registration
 */
export const registerService = async (username, password) => {
  // Check if user already exists
  const existingUser = await findUserByName(username);
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await createUser({ username, password: hashedPassword });
  return newUser;
};
