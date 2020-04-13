const mongoose = require('mongoose');

var Category = mongoose.model('category',{
    Id : {type : Number},
    Name : {type: String}
});