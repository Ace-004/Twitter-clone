import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("twiter backend is running...");
});

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGODB_URL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("Mongodb connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port https://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to Mongodb:", err.message);
  });
