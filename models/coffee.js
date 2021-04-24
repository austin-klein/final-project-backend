const mongoose = require("mongoose");


const CoffeeSchema = new mongoose.Schema({

    name: String,
    desc: String,
    image: String,
    strong: Boolean
})





module.exports = mongoose.model("Coffee", CoffeeSchema)