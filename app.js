const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const { Schema } = mongoose;

const taskSheme = new Schema({
  text: String,
  isCheck: Boolean,
});

const Task = mongoose.model("tasks", taskSheme);

app.use(cors());

const url =
  "mongodb+srv://new_user:user987@cluster0.xtko5.mongodb.net/TestEducationDB?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.get("/allTasks", (req, res) => {
  Task.find().then((result) => {
    res.send({ data: result });
  });
});

app.post("/createTask", (req, res) => {
  const task = new Task(req.body);
  task.save().then((result) => {
    res.send("Task created");
  });
});

app.patch("/updateTask", (req, res) => {
  const { _id } = req.body;
  Task.updateOne({ _id }, req.body).then((result) => {
    Task.find().then((result) => {
      res.send({ data: result });
    });
  });
});

app.delete("/deleteTask", (req, res) => {
  Task.deleteOne(req.body).then((result) => {
    Task.find().then((result) => {
      res.send({ data: result });
    });
  });
});

app.delete("/deleteTasks", (req, res) => {
  Task.deleteMany(req.body).then((result) => {
    Task.find().then((result) => {
      res.send({ data: result });
    });
  });
});

app.listen(4000, () => {
  console.log("Example app listening on port 4000!");
});
