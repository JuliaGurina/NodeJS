const mongoose = require("mongoose");

const { Schema } = mongoose;

const taskSheme = new Schema({
  text: String,
  isCheck: Boolean,
});

module.exports = Task = mongoose.model("tasks", taskSheme);
