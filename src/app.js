// Edyr, Bruno
const express = require('express');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const userRoute = require('./routes/userRoute');
const queueRoute = require('./routes/queueRoute');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('C:\\Users\\edyrc\\pro\\fcamaragerenciadorfila\\client\\public'))

app.set('view engine', 'ejs');
app.use('/', index);
app.use('/user', userRoute);
app.use('/queue', queueRoute);

module.exports = app;

