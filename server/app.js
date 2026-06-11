import express from "express";
import dotenv from "dotenv"

import Connect from "./config/connectDB.js";

dotenv.config();
const app = express();

Connect(process.env.MONGO_URI);

app.use("/", (req, res) => {
    res.send("link working")
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost/${PORT}`);
})