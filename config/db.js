import mongoose from "mongoose";
import { appConfig } from "./config.js"; 

export const connectToMongoDb = async () => {
  try {
    await mongoose.connect(appConfig.mongo_url);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
