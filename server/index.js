const db = require('./config/db')
db()
const express = require('express')
const http = require('http')
const {Server} = require('socket.io')
const cors = require('cors')
const socketHeader = require('./config/socket')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())


const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        methods:['POST','GET'],
        origin:'http://localhost:5173',
        credentials:true
    }
})

app.use('/auth',require('./router/auth'))
app.use('/get/user',require('./router/getData'))
socketHeader(io)



server.listen(PORT,()=>{
    console.log(`Server is running in this PORT ${PORT}`)
})