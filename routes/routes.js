const express = require('express');
const Router = express.Router();
const ToDo = require('../models/model.js');
Router.get('/',(req,res)=>{
    res.send({'situation' : 'UNDER-CONSTRUCTION'})
});

Router.get('/Completed' ,(req,res )=>{
    res.send({'situation' : 'UNDER-CONSTRUCTION'});
});

Router.get('/inCompleted',(req,res)=>{
    res.send({'situation' : 'UNDER-CONSTRUCTION'});
});

Router.get('/:toDoListId', (req,res)=>{
    res.send ({'situation' : 'UNDER-CONSTRUCTION'})
});

Router.post('/',async (req,res)=>{
    try{
        const { work , completion , description ,timeCreated,deadline } = req.body; //--To Get Data From The Form --\\
        const newtodo = new ToDo({ work , completion , description ,timeCreated,deadline }); // Create a new To-Do document
        await newtodo.save();
        res.redirect('/'); // redirects back to homepage
    } catch(err){
        console.log(`Err in POST route : ${err}`)
    }
});

Router.delete('/:toDoListId',(req,res)=>{
    res.send({'situation' : 'UNDER-CONSTRUCTION'})
})

module.exports = Router ;