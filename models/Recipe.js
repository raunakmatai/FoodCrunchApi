const mongoose = require('mongoose');

var Recipe = mongoose.model('recipe',{
    Id : {type : Number},
    Name : {type: String},
    Image_Id : {type: Number},
    Category_Id : {type: Number},
    User_Id : {type: Number},
    isVeg : {type : Boolean}
});