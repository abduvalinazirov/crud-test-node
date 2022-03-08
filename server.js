require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.use("/api", require("./routes/StudentRoutes"));

// const PORT = process.env.PORT;
// const MongoUrl = process.env.MONGO_URL;

mongoose.connect(
  "mongodb+srv://user:admin@cluster0.yrh0r.mongodb.net/curd?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  () => {
    console.log("db connected");
  }
);

app.listen(5009, () => {
  console.log("server is running");
});
