
const express = require('express' )
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
const port = 3500

 const accountsRouter = require ('./routes/accounts');
 
app.use(express.json());


//const usersRouter = require('./routes/usersRoute');
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
//app.use('/api/user',usersRouter);
app.use('/api/accounts', accountsRouter)

mongoose.connect('mongodb://localhost/memories', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
})
.then(console.log("connect to DB memories!"));

mongoose.set('debug','true');


app.listen(port,()=>{
    console.log(`example app listening at http://localhost:${port}`)
})
