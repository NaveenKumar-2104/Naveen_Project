import {
  addTaskService,
  deleteTaskService,
  getTaskService,
  updateTaskService,
} from "../services/todoService.js";


export const addTaskController = async (req, res) => {
  try {
    const taskData = {
      user: req.user.id,
      todo: req.body.todo,
      status: req.body.status,
    };
    const result = await addTaskService(taskData);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getTaskController = async (req, res) => {
  try {
    const result = await getTaskService(req.user.id);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateTaskController = async (req, res) => {
  try {
    const taskData = {
      user: req.user.id,
      todo: req.body.todo,
      status: req.body.status,
    };
    const result = await updateTaskService(req.params.id, taskData);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteTaskController = async (req, res) => {
  try {
    const result = await deleteTaskService(req.params.id);
    res.json({ message: "Task deleted", result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
