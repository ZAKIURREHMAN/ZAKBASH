const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    time:{
        type:Date,
        default: Date.now,
    },
    verify:{
        type:Boolean,
        default:false
    },
})

module.exports = mongoose.model('user',userSchema)