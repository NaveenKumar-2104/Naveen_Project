import dotenv from "dotenv";
dotenv.config();

export const appConfig = {
  port: process.env.PORT,
  mongo_url: process.env.MONGO_URL,
  jwt_key: process.env.JWT_SECRET,
};
