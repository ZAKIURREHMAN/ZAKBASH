const conversationSchema = require('../modules/conversation')




const getRoomId = async(senderId,receiverId)=>{
    const con = await conversationSchema.findOne({members:{$all:[senderId,receiverId]}})


    if(!con){
        const con =  await conversationSchema.create({
            members:[senderId,receiverId]
        })
    }
    return con._id.toString()
}

module.exports = {getRoomId}