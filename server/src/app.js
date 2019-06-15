const express = require('express');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const userRoute = require('./routes/userRoute');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/user', userRoute);

module.exports = app;

