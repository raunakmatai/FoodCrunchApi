const mongoose = require('mongoose');

var Role = mongoose.model('role',{
    Id : {type : Number},
    Name : {type: String}
});