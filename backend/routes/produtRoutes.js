import express from "express";
import { createProduct } from "../controllers/productController.js";

let router = express.Router();

router.post("/create", createProduct);

export default router;