const mongoose = require('mongoose');

var User = mongoose.model('users',{
    Id : { type: Number},
    Name : { type : String}
});

module.exports = {User};