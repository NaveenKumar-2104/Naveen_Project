import { Taskmodel } from "../models/todoModel.js";

// ✅ Create
export const createTask = async (taskData) => {
  const task = new Taskmodel(taskData);
  return await task.save();
};

// ✅ Read
export const getAllTasksByUser = async (userId) => {
  return await Taskmodel.find({ user: userId });
};

export const findById = async (id) => {
  return await Taskmodel.findById(id);
};

// ✅ Update
export const updateTask = async (id, taskData) => {
  return await Taskmodel.findByIdAndUpdate(id, taskData, { new: true });
};

// ✅ Delete
export const deleteTaskById = async (id) => {
  return await Taskmodel.findByIdAndDelete(id);
};
