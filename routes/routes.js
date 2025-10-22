const express = require('express');
const Router = express.Router();

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

Router.post('/:toDoListId',(req,res)=>{
    res.send({'situation' : 'UNDER-CONSTRUCTION'})
});

Router.delete('/:toDoListId',(req,res)=>{
    res.send({'situation' : 'UNDER-CONSTRUCTION'})
})

module.exports = Router ;