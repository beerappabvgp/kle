import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// connect to the database

let connectToDatabase = async () => {
    try {
        console.log(process.env.mongo_url);
        await mongoose.connect(process.env.mongo_url);
        console.log("Connected to the database");
    } catch (error) {
        console.log(error);
    }
}

export default connectToDatabase;