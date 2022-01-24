const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    isAvailable:{
        type:Boolean,
        default:true
    },
    availableInColors:[String],
    activeColor:{
        type: String,
        enum: ['Red', 'Green','Blue']
    }
})

module.exports = mongoose.model('Product',productSchema)