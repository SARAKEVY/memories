
const express = require('express' )
const app = express()
const port = 3500

const mongoose = require('mongoose');

app.use(express.json());


const usersRouter = require('./routes/user');
app.use('/api/user',usersRouter);


const usersAccount = require('./routes/account');
app.use('/api/account',usersAccount);


mongoose.connect('mongodb://localhost:27017/memories', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
})
.then(console.log("connect to DB memories!"));

mongoose.set('debug','true');


app.listen(port,()=>{
    console.log(`example app listening at http://localhost:${port}`)
})
