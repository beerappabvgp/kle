import mongoose from "mongoose";
import Product from "../models/products.js";

export let createProduct = async (req, res) => {
    try {
        // get the information from the request body
        let { name, price, brand, discount, description } = req.body;
        if (!name || !price || !brand || !description) {
            return res.status(400).json({
                success: false,
                message: "All fields are required: name, price, brand, description"
            });
        }

        // create a new product
        let product = await Product.create({ name, price, brand, discount, description });
        console.log("inserted product", product);
        return res.status(201).json({
            success: true,
            message: "Product created successfully",
            product
        });
    } catch (error) {
        console.log("error in creating product", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}