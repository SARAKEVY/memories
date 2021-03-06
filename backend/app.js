
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
const port = 3500

const multer = require('multer')

const accountsRouter = require('./routes/accounts');
const usersRouter = require('./routes/users');
const itemsRouter = require('./routes/items');
const locationsRouter = require('./routes/locations');
const authRouter = require('./routes/auth');
const accountAuthRouter = require('./routes/accountAuth');
const detailsRouter = require('./routes/details');
const imageRouter = require('./routes/image');

app.use(express.json());



app.use(cors());
app.use(express.json());

app.use(express.static('public'));

app.use('/api/accounts', accountsRouter)
app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)
app.use('/api/accountAuth', accountAuthRouter)
app.use('/api/items', itemsRouter)
app.use('/api/locations', locationsRouter)
app.use('/api/details',  detailsRouter)
app.use('/api/image',  imageRouter)

mongoose.connect('mongodb://localhost/memories', {
  useNewUrlParser: true,
  useUnifiedTopology: true,

})
  .then(console.log("connect to DB memories!"));

mongoose.set('debug', 'true');


app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`)
})
