const express = require('express');
var router = express.Router();

var {User} = require('../models/User');

var ObjectId = require('mongoose').Types.ObjectId;

router.get('/',(req,res)=>{
    User.find((err,docs)=>{
        if(!err){res.send(docs);}
        else
        console.log('Error in retrieving records!' + JSON.stringify(err,undefined,2));
    })
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`Not a valid id: ${req.params.id}`);

    User.findById(req.params.id,(err,docs)=>{
        if(!err){res.send(docs);}
        else
        console.log('Error in retrieving record!' + JSON.stringify(err,undefined,2));
    })
});

router.post('/',(req,res)=>{
    var userData= new User({
        Name: req.body.Name
    });
    console.log(req.body);
    console.log(userData);
    userData.save((err,docs)=>{
        if(!err) {res.send(docs)}
        else
        console.log('Error in updating user record!' + JSON.stringify(err,undefined,2));

    })
})

module.exports = router;