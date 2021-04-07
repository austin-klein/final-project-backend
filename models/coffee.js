const mongoose = require("mongoose");


const CoffeeSchema =new mongoose.Schema({

name: {


    type: String,

    required: true,

    id : "c1",

    name: "black coffee",


},

name: {
    type : String, 

    required: true,

    id : "c2",

    name: "latte"
},

name: {
    type : String, 


    required: true,

    id : "c3",

    name: "cappacino"
},

name: {
    type : String, 

    id : "c4",

    required: true,

    name: "frappacino"
}




})





module.exports = mongoose.model("Coffee", coffeeSchema)