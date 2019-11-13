const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const PORT = process.env.PORT || 4444 

app.use(morgan('dev'))
app.use(bodyParser.text())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/paymentSystem', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
}, console.log('db connected...'))

//Route goes here
  app.use('/charge', require('./routes/paymentRouter'))


app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`)
})