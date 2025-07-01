import exp from "express";
import { loginController, registerController } from "../controllers/authController.js"; // ✅ ADD registerController

const router = exp.Router();

router.post("/login", loginController);
router.post("/register", registerController); // ✅ ADD this line

export default router;
