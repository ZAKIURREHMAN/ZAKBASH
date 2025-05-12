const profileSchema = require('../modules/userProfile')
const {verifyJwt} = require('../jwt/signupjwt')
const handleCloudinary = async(req,res)=>{
    const token = req.headers?.authorization?.split(' ')[1]
    const response = await verifyJwt(token)
    if(!response){
    return res.status(400).json({message:"Your Token expired please Login again ",})
    }
    const {name,about,userId} = req.body
     const image = req.file.path;
    const profile = await profileSchema.create({
        userId,
        image,
        name,
        about,
    })
    return res.status(200).json({message:"User Profile are create Successfully  ",profile})
    // }

}
module.exports = handleCloudinary