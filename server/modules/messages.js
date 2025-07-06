const mongoose = require('mongoose')
const {Schema} = mongoose

const messageSchema = new Schema({
     conversationId:{
        type:String,
        required:true,
    },
    senderId:{
        type:String,
        required:true,
    },
      text:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
})

module.exports = mongoose.model('message',messageSchema)