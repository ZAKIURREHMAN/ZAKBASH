const mongoose = require('mongoose')
require('dotenv').config()
const URL = process.env.MONGOOSE_URL

const connectToMongo = ()=>{
    mongoose.connect(URL)
    .then((res)=>console.log(`Database is Connected Successfully`))
    .catch((err)=>console.log('Database is NOT connected TRY Again',err))
}

module.exports = connectToMongo;