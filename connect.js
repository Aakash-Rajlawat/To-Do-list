const mongoose = require('mongoose');

const connectionToMongoDb = async () => {

    await mongoose.connect('mongodb://127.0.0.1:27017/toDoList')
    .then(()=> {console.log('Mongodb connected successfully.')})
    .catch((err) => {console.log(`The Mongodb was unable to connect due to the following err :\n ${err}`)});

};

module.exports = connectionToMongoDb;
