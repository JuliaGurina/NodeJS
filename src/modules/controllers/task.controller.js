const Task = require("../../db/models/task/index");

module.exports.getAllTasks = (req, res) => {
  Task.find().then((result) => {
    res.send({ data: result });
  });
};

module.exports.createNewTask = (req, res) => {
  const task = new Task(req.body);
  task.save().then((result) => {
    res.send({ data: result });
  });
};

module.exports.changeTaskInfo = (req, res) => {
  const { _id } = req.body;
  Task.updateOne({ _id }, req.body).then((result) => {
    Task.find().then((result) => {
      res.send({ data: result });
    });
  });
};

module.exports.deleteTask = (req, res) => {
  Task.deleteOne(req.query).then((result) => {
    Task.find().then((result) => {
      res.send({ data: result });
    });
  });
};

module.exports.deleteTasks = (req, res) => {
  Task.deleteMany().then((result) => {
    res.send({ data: result });
  });
};
