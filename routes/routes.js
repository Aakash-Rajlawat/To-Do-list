const express = require("express");
const Router = express.Router();
const ToDo = require("../models/model.js");

const {
  getAllToDo,
  getCompletedToDo,
  getIncompleteToDo,
  getToDoByID,
  postToDo,
  putToDo,
  deleteToDo,
} = require("../controller/controller.js");

Router.get("/", getAllToDo);

Router.get("/Completed", getCompletedToDo);

Router.get("/inCompleted", getIncompleteToDo);

Router.get("/:toDoListId", getToDoByID);

Router.post("/", postToDo);

Router.put("/:toDoListId", putToDo);

Router.delete("/:toDoListId", deleteToDo);

module.exports = Router;
