const express = require('express');
const Router = express.Router();
const ToDo = require('../models/model.js');


Router.get('/', async (req,res)=>{
    try {
    const todos = await ToDo.find();
    res.status(200).json(todos);
    }
    catch(err){
        console.log ("The error is ", err);
    };

});

Router.get('/Completed' ,async(req,res )=>{
    try {
        const todos = await ToDo.find({completion : true});
        if (todos.length > 0){
            res.json(todos);
        }
        else{
            res.json('You have completed no task')
        }
    } catch (err) {
        console.log('The err is : ',err);
    }
});

Router.get('/inCompleted', async (req,res)=>{
    try {
        const todo = await ToDo.find({"completion": false});
        if (todo.length > 0){
            res.json(todo);
        }
        else 
        {
            res.json ('You have completed all the taskes')
        }

    } catch (err) {
        console.log('The err is : ',err);
    }
});

Router.get('/:toDoListId', async (req,res)=>{
    try {
    const toDoListId = req.params.toDoListId;
    const todo = await ToDo.findById(toDoListId);
    if(todo){
        res.json(todo);
    }
    else{
        res.status(404).json('Id not found')
    }
    }
    catch(err){
        res.json({ error: `Err is ${err}` });
    }
});

Router.post('/',async (req,res)=>{
    try{
        const { work , completion , description ,timeCreated,deadline } = req.body; //--To Get Data From The Form --\\
        if (!work || !completion || !description || !deadline){
            res.status(400).json({err : "PLEASE ENTER THE ENTIRE INFO!"})
        };
        const newtodo = new ToDo({ work , completion , description ,timeCreated,deadline }); // Create a new To-Do document
        await newtodo.save();
        res.redirect('/'); // redirects back to homepage
    } catch(err){
        console.log(`Err in POST route : ${err}`)
    }
});

Router.delete('/:toDoListId', async (req,res)=>{
    try {
    const toDoListId = req.params.toDoListId;
    const deleteTodo = await ToDo.findByIdAndDelete(toDoListId);
    if(!deleteTodo){
        res.status(404).json({msg : 'To-Do not found'})
    }else{
        res.json({'msg' : 'To-Do deleted successfully'})
    };
    } catch (err){
        res.send(`Error in the delete route : ` ,err);
    }
})

module.exports = Router ;