import User from "../models/users.js";

export let registerUser = async (req, res) => {
    try {

        // get information from the request body
        let { name, email, password, contactNumber } = req.body;
        console.log(req.body);

        // Validate required fields
        if (!name || !email || !password || !contactNumber) {
            return res.status(400).json({
                success: false,
                message: "All fields are required: name, email, password, contactNumber"
            });
        }

        // create a new user
        let user = await User.create({ name, email, password, contactNumber });

        return res.status(201).json(
            {
                success: true,
                message: "User registered successfully",
                user,
            }
        );
    } catch (error) {
        console.error("Error in registerUser:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
}   