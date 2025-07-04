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



export let loginUser = async (req, res) => {
    try {
        let { email, password } = req.body;
        console.log(req.body);
        if ( !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required: email, password"
            });
        }

        // find the user in the database
        let user = await User.findOne({ email });
        console.log(user);

        // login user
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            });
        }

        // check the password
        if (user.password !== password) {
            return res.status(400).json({
                success: false,
                message: "Invalid Password"
            })
        }

        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user
        });

    } catch (error) {
        console.log("error in loginUser", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}