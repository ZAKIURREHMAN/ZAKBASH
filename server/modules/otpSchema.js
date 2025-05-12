const mongoose = require('mongoose')
const {Schema} = mongoose

const otpSchema = new Schema({
    userId:{
        type:String,
        require:true
    }, 
    otp:{
        type:String,
        require:true
    },
    time:{
        type:Date,
        default: Date.now,
    },
    expiresAt: {
        type: Date,
        required: true,
        default: () => new Date(Date.now() + 5 * 60 * 1000)
      },
})

otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model('otp',otpSchema)