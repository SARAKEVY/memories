<<<<<<< HEAD
const express = require('express' )
const app = express()
const port = 3500

const mongoose = require('mongoose');



//const usersRouter = require('./routes/usersRoute');
app.use(express.json());

//app.use('/api/user',usersRouter);


mongoose.connect('mongodb://localhost:27017/memories', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
})
.then(console.log("connect to DB memories!"));

mongoose.set('debug','true');


app.listen(port,()=>{
    console.log(`example app listening at http://localhost:${port}`)
})
=======

>>>>>>> c8ff00c65b1671e059d51f1ecf5d8589b82ae29a
