const mongoose = require("mongoose");


const CoffeeSchema =new mongoose.Schema({

name: {
    type: String,

    required: true,

    name: "black coffee"

}

})





module.exports = mongoose.model("Coffee", coffeeSchema)