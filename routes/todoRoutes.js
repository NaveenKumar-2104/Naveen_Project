import exp from "express";
import { authenticate } from "../middlewares/authMiddleware.js";
import {
  addTaskController,
  deleteTaskController,
  getTaskController,
  updateTaskController,
} from "../controllers/todoController.js";

const router = exp.Router();
router.use(authenticate);
router.post("/add", addTaskController);
router.get("/get", getTaskController);
router.put("/update/:id", updateTaskController);
router.delete("/:id", deleteTaskController);

export default router;
