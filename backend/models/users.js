import mongoose from "mongoose";

let userSchema = new mongoose.Schema(
    {
        // 1st key value pair
        name: {
            type: String,
            required: true,
        },
        // second key value pair
        email: {
            type: String,
            required: true,
        },
        // 3rd key value pair
        password: {
            type: String,
            required: true,
        },
        // 4th key value pair
        contactNumber: {
            type: String,
        },
    },
);

let User = mongoose.model("User", userSchema);

export default User;