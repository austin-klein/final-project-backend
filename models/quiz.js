const mongoose = require("mongoose");


const QuizSchema = new mongoose.Schema ({



    name: {


        type: String,
    
        required: true,

        with: "strong",
    
        id : "c1",
    
        name: "black coffee",
    
    
    },
    
    name: {
        type : String, 
    
        required: true,

        with: "dairy",
    
        id : "c2",
    
        name: "latte"
    },
    
    name: {
        type : String, 
    
    
        required: true,

        with: "flat",
    
        id : "c3",
    
        name: "cappacino"
    },
    
    name: {
        type : String, 
    
        id : "c4",

        with : "sugar",
    
        required: true,
    
        name: "frappacino"
    },

    name: {


        type: String,
    
        required: true,
    
        id : "c5",

        with : "caffiene",
    
        name: "espresso",
    
    
    }
    
    
    
    
    })
    




