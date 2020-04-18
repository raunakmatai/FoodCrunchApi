const mongoose = require('mongoose');

var RoleDescription = mongoose.model('recipe',{
    Id : {type : Number},
    StepNumber : {type: Number},
    Content : {type: String},
    Ingredients : {type: String},
    PrepTime : {type: String},
    Image_Id : {type: Number},
    Recipe_Id : {type : Number}
});

module.exports = {RoleDescription};