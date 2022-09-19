import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8800;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB connection is made")
  } catch (error) {
    throw error;
  }
};

app.listen(PORT, () => {
    connect()
  console.log(`API server is connected on port ${PORT}`);
});
