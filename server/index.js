const db = require('./config/db')
db()
const express = require('express')
const http = require('http')
const {Server} = require('socket.io')
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())


const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        methods:['POST','GET'],
        origin:'*',
        credentials:true
    }
})

app.use('/auth',require('./router/auth'))



server.listen(PORT,()=>{
    console.log(`Server is running in this PORT ${PORT}`)
})