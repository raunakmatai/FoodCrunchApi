const mongoose = require('mongoose');

var User = mongoose.model('user',{
    Id : { type: Number},
    Name : { type : String}
});

module.exports = {User};