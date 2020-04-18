const mongoose = require('mongoose');

var RecipeImage = mongoose.model('recipeImage',{
    Id : {type : Number},
    Name : {type: String},
    Path : {type: String}
});

module.exports = {RecipeImage};