import { 
  createTask, 
  getAllTasksByUser, 
  deleteTaskById, 
  updateTask, 
  findById 
} from "../dal/todoDAL.js";

// ✅ Add Task
export const addTaskService = async (taskData) => {
  return await createTask(taskData);
};

// ✅ Get Tasks by User
export const getTaskService = async (userId) => {
  return await getAllTasksByUser(userId);
};

// ✅ Update Task
export const updateTaskService = async (taskId, taskData) => {
  const task = await findById(taskId);
  if (!task || task.user.toString() !== taskData.user) {
    throw new Error("User Invalid");
  }
  return await updateTask(taskId, taskData);
};

// ✅ Delete Task
export const deleteTaskService = async (taskId) => {
  return await deleteTaskById(taskId);
};
