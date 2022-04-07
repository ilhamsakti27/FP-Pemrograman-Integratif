var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// // connect to mongodb server
// var { MongoClient } = require('mongodb');

// // Database

// // Database URL
// const url = 'mongodb://localhost:27017';

// // Database Name

// const dbName = 'fp-pemrograman-integratif';

// // Connect to database
// MongoClient.connect(url, (err, client) => {
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   client.close();
// });

// // connect to mongodb server


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registrasiRouter = require('./routes/registrasi');
var getAllRouter = require('./routes/getAll');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth/register', registrasiRouter);
app.use('/getall', getAllRouter);


module.exports = app;
