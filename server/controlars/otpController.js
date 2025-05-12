const otpSchema = require('../modules/otpSchema')
const otpData = require('../modules/otpSchema')
const User = require('../modules/user')
const {signupJwt} = require('../jwt/signupjwt')

const otpController = async(userId,otp)=>{
     await otpSchema.create({
        userId,
        otp,

    })
}

const verifyOtp = async(req,res)=>{
    const {userId,otp} = req.body
    console.log(userId,otp)
    const otpResult = await otpData.findOne({userId})
    if(otpResult.otp === otp){
        const updateResultData = await User.findOneAndUpdate({_id:userId},{verify:true},{ new: true })        
        const token = signupJwt(userId,updateResultData.name,updateResultData.email)
        return res.status(200).json({message:"Register Successfully Successfully",data:updateResultData,token:token})
    }
    return res.status(400).json({message:"Please Enter a valid OTP"})

}

module.exports = {otpController,verifyOtp}