import express from "express";
import mongoose from "mongoose";
import { config } from 'dotenv';

const app = express();
config();

const PORT = process.env.SERVERPORT;

mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("Database Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log("Server running on PORT: " + PORT);
});
