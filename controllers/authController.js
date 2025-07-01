import { loginService, registerService } from "../services/authService.js"; 
export const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await loginService(username, password);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const registerController = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await registerService(username, password);
    res.json({ message: "User registered successfully", user: result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
