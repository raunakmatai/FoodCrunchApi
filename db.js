const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FoodBlog_Test',(err)=>{
    if(!err){
        console.log("DB Connection Suceeded...");
    }
    else
    {
        console.log('DB Connection Failed'+ JSON.stringify(err,undefined,2));
    }
});

module.exports = mongoose;