import express from "express";
import { registerUser } from "../controllers/userController.js";

let router = express.Router();

// http://localhost:5000/users/register
router.post("/register", registerUser);


export default router;