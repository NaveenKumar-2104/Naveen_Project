import mongoose, { Schema, model } from "mongoose";

const TaskSchema = new Schema({
  todo: { type: String, required: true },
  status: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
}, { timestamps: true });

export const Taskmodel = model("task", TaskSchema);
