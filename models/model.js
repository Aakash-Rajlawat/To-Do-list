const mongoose = require('mongoose')
const express = require('express')

// creating a mongoose schema , like columns in sequal

const toDoListSchema = new mongoose.Schema ({
    work : {
        type : string ,
        required : true,
    },
    completion : {
        type : Boolean ,
        default : false
    },
    description : {
        type : string ,
        default : ''
    },
    timeCreated : {
        type : Date ,
        default : Date.now ,
    },
    Deadline : {
        type : Date,
        required : true,
    }
});

//now model meaning collection

toDo = mongoose.model('toDo' , toDoListSchema);

module.exports = toDo;
