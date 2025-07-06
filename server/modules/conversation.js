const mongoose = require('mongoose')
const {Schema} = mongoose

const conversationSchema = new Schema({
    members:[String],
    createdAt:{
        type:Date,
        default:Date.now,
    },
})

module.exports = mongoose.model('conversation',conversationSchema)