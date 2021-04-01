const mongoose = require ("mongoose")



const UserSchema = mongoose.Schema({

name : {
    type: String,
    required: true,
    min: 4,
    max: 250
},
email : {
    type: String,
     required: true,
    min: 4,
    max: 250},

password : {
    type: String,
     reqired: true,
     min: 4,
     max:250
    }

});

module.exports = mongoose.model("User", UserSchema)