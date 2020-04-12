const express = require('express');
const parser = require('body-parser');

const {mongoose} = require('./db');
var userController =require('./controllers/userController');

var app = express();
app.use(parser.json());

app.listen(3000,()=> console.log("Server started at 3000 port number"));

app.use('/User',userController);
