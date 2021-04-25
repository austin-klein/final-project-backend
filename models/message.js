const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({

    name: String,
    desc: String,
    image: String,
    user: String
})





module.exports = mongoose.model("Message", MessageSchema)