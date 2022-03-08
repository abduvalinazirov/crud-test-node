const { default: mongoose } = require("mongoose");

const Students = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Students", Students);
