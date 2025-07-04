import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";

let router = express.Router();

// http://localhost:5000/users/register
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;