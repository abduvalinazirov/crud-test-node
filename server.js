require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.use('/api', require('./routes/StudentRoutes'))

const PORT = process.env.PORT;
const MongoUrl = process.env.MONGO_URL;

mongoose.connect(MongoUrl, { useNewUrlParser: true }, () => {
  console.log("db connected");
});

app.listen(PORT, () => {
  console.log("server is running");
});
