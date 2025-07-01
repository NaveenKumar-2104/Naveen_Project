import express from "express";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables

import { appConfig } from "./config/config.js";
import { connectToMongoDb } from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import taskRouter from "./routes/todoRoutes.js";

const app = express();

// Middleware
app.use(express.json());

app.get( "/",(req, res) => {
  res.json({ message: 'Hello from Node.js!' });
});
// Routes
app.use("/auth", authRouter);   // Maps to /auth/login, /auth/register
app.use("/task", taskRouter);   // Maps to task-related endpoints

// Start Server
app.listen(appConfig.port, async () => {
  await connectToMongoDb();
  console.log("✅ Server started on port:", appConfig.port);
});
