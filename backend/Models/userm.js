const mongoose = require('mongoose');

const userschema = mongoose.Schema({

    location : String,
    personinHouse: Number,
    houseSize: String

})

var User = mongoose.model("User",userschema)

module.exports = User;