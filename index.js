const express = require ('express');
const app = express();
const PORT = 8001;
const connectionToMongoDb = require('./connect')
const Router = require('./routes/routes')

app.use('/',Router);

connectionToMongoDb();

app.listen(PORT,()=>{
    console.log(`The server is successfully running on port ${PORT}`);
})
