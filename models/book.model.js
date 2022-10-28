const mongoose = require("mongoose");

const bookSchema =  new mongoose.Schema({

    Name: {
        type:String,
        required:true,

    },
    ImageURL: {
        type:String,
        required:true,
        
    },
    Author: {
        type:String,
        required:true,
        
    },
    Pages: {
        type:Number,
        required:true,
        
    },
    Price: {
        type:Number,
        required:true,
        
    }



})

const Book=new mongoose.model("books",bookSchema)
module.exports=Book