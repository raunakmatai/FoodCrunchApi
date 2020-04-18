const express = require('express');
var router = express.Router();

var {Category} = require('../models/Category');

var objectId = require('mongoose').Types.ObjectId;

router.get('/category',(req,res)=>{
    Category.find((err,docs)=>{
        if(!err){res.send(docs)}
        else{ console.log( 'error in category finding');}
    });
   
});

module.exports = router;