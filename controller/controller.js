const ToDo = require("../models/model.js");

const getAllToDo = async (req, res) => {
  try {
    const todos = await ToDo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.send("The error is ", err);
  }
};

const getCompletedToDo = async (req, res) => {
  try {
    const todos = await ToDo.find({ completion: true });
    if (todos.length > 0) {
      res.json(todos);
    } else {
      res.json("You have completed no task");
    }
  } catch (err) {
    res.send(`The err is ${err}`);
  }
};

const getIncompleteToDo = async (req, res) => {
  try {
    const todo = await ToDo.find({ completion: false });
    if (todo.length > 0) {
      res.json(todo);
    } else {
      res.json("You have completed all the taskes");
    }
  } catch (err) {
    res.send("The err is : ", err);
  }
};

const getToDoByID = async (req, res) => {
  try {
    const toDoListId = req.params.toDoListId;
    const todo = await ToDo.findById(toDoListId);
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json("Id not found");
    }
  } catch (err) {
    res.json({ error: `Err is ${err}` });
  }
};

const postToDo = async (req, res) => {
  try {
    const { work, completion, description, timeCreated, deadline } = req.body; //--To Get Data From The Form --\\
    if (!work || !completion || !description || !deadline) {
      res.status(400).json({ err: "PLEASE ENTER THE ENTIRE INFO!" });
    }
    const newtodo = new ToDo({
      work,
      completion,
      description,
      timeCreated,
      deadline,
    }); // Create a new To-Do document
    await newtodo.save();
    res.redirect("/"); // redirects back to homepage
  } catch (err) {
    res.send(`Err in POST route : ${err}`);
  }
};

const putToDo = async (req, res) => {
  try {
    const toDoListId = req.params.toDoListId;
    const { work, completion, description, timeCreated, deadline } = req.body;
    const updatedToDo = await ToDo.findByIdAndUpdate(
      toDoListId,
      { work, completion, description, timeCreated, deadline },
      { new: true }
    );
    if (!updatedToDo) {
      res.status(404).json({ err: "The todo wasn't found " });
    } else {
      res.json({ msg: "The todo has been updated" });
    }
  } catch (err) {
    res.send(`The err is ${err}`);
  }
};

const deleteToDo = async (req, res) => {
  try {
    const toDoListId = req.params.toDoListId;
    const deleteTodo = await ToDo.findByIdAndDelete(toDoListId);
    if (!deleteTodo) {
      res.status(404).json({ msg: "To-Do not found" });
    } else {
      res.json({ msg: "To-Do deleted successfully" });
    }
  } catch (err) {
    res.send(`Error in the delete route : ${err}`);
  }
};

module.exports = {
  getAllToDo,
  getCompletedToDo,
  getIncompleteToDo,
  getToDoByID,
  postToDo,
  putToDo,
  deleteToDo,
};
