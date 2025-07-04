import mongoose from "mongoose";

let productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    discount: {
        type: Number
    },
    description: {
        type: String,
        required: true,
    },
});

let Product = mongoose.model("Product", productSchema);

export default Product;