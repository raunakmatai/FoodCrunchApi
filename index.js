const express = require('express');
const parser = require('body-parser');

const {mongoose} = require('./db');
var userController =require('./controllers/userController');
var categoryController = require('./controllers/categoryController');

var app = express();
app.use(parser.json());


//todo - add routes

app.listen(3000,()=> console.log("Server started at 3000 port number"));

app.use('/userController',userController);
app.use('/categoryController',categoryController);
//app.use('/api',userController);
