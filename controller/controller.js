const Todo = require("../model/model");

const createTask = async (req, res) => {
  try {
    const { title, desc, status, duedate } = req.body;
    const task = new Todo({ title, desc, status, duedate })
    await task.save();
    res.status(200).json({ message: "Task Added Successfully" });
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Error" });
  }
}

const showTasks = async (req, res) => {
  try {
    const tasks = await Todo.find();
    if (!tasks) res.status(401).json({ message: "No Tasks to Show" });
    res.status(201).json(tasks);
  } catch (err) {
    console.log(err);
    res.status(402).json({ message: "Error" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const tasks = await Todo.findByIdAndDelete(req.params.id);
    if (!tasks) res.status(400).json({ message: "No Task Found to delete" });
    res.status(202).json({ message: "Task Deleted" });
  } catch (err) {
    console.log(err);
    res.status(402).json({ message: "Error" });
  }
};

const updateTask = async (req, res) => {
  try {
    const tasks = await Todo.findByIdAndUpdate(req.params.id);
    if (!tasks) res.status(400).json({ message: "No Task Found to update" });
    res.status(202).json({ message: "Task Updated" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Error" });
  }
};

module.exports = { createTask, showTasks, updateTask, deleteTask };
