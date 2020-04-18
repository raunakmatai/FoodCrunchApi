const express = require('express');

var router = express.Router;
var ObjectId = require('mongoose').Types.ObjectId;

var {RecipeList} = require('../models/Recipe');

router.get('/recipeList', (req,res)=>{
    RecipeList.find((err,docs)=>{
        if(!err){
            res.send(docs);
        } else{
        console.log('Error in retrieving recipeList!' + JSON.stringify(err,undefined,2));
        }
    });
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`Not a valid id: ${req.params.id}`);
    } 
    RecipeList.findById(req.params.id,(err,docs)=>{
        if(!err){res.send(docs);
        }else{
            console.log('Error in retrieving record!' + JSON.stringify(err,undefined,2));
        }
    })
});

