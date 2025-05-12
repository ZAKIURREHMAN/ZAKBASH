const mongoose = require('mongoose')
const {Schema} = mongoose


const profileSchema = new Schema({
    userId:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },

    name:{
        type:String,
        required:true,
    },

    about:{
        type:String,
        required:true,
    },
})


module.exports = mongoose.model('profile',profileSchema)