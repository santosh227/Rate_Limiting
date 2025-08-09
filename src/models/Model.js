const mongoose = require('mongoose')

const newSchema = new mongoose.Schema({
    name :{
        type:String,
        required : [true, "name is mandatory"]
    },
    email:{
        type : String,
        required : true
    },
    image :{
        type : String,
        required : false 
    }
})

const Product = mongoose.model("product",newSchema )

module.exports = {Product}