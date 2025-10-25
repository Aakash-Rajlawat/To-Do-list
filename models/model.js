const mongoose = require("mongoose");

// creating a mongoose schema , like columns in sequal

const toDoListSchema = new mongoose.Schema({
  work: {
    type: String,
    required: true,
  },
  completion: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    default: "",
  },
  timeCreated: {
    type: Date,
    default: Date.now,
  },
  deadline: {
    type: Date,
    required: true,
  },
});

//now model meaning collection

const ToDo = mongoose.model("toDo", toDoListSchema);

module.exports = ToDo;
