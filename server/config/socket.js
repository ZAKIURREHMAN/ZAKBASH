const {getRoomId} = require('../controlars/allConversationLogic')
const messageSchema = require('../modules/messages')
const conversationSchema = require('../modules/conversation')

const socketHeader = (io)=>{
    io.on('connection',(socket)=>{



        socket.on('joinRoom',async({senderId,receiverId})=>{

            const roomId = await getRoomId(senderId,receiverId)
            socket.join(roomId)
            socket.data.userId = senderId


        })

        socket.on('sendMessage',async({senderId,receiverId,text})=>{


            const roomId = await getRoomId(senderId,receiverId)

            const createMessage = await messageSchema.create({
                 conversationId:roomId,
                 senderId,
                 text,
            })
            await conversationSchema.findByIdAndUpdate(roomId,{
                createdAt:new Date()
            })


            io.to(roomId).emit('newMessage',createMessage)


        })
//         socket.on("disconnect", () => {
//     console.log("Disconnected:", socket.id);
//   });

    })

}


module.exports = socketHeader