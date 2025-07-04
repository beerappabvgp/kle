import express from "express";
import connectToDatabase from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
// create a new exprees application 

let app = express();

// Middleware should be defined before routes
app.use(express.json());

function helloWorld(req, res) {
    return res.send("Hello KLE");
}

app.get('/kle-bca', helloWorld);


// 
app.use("/users", userRoutes);

// connecting to the database
connectToDatabase();

app.listen(5000);