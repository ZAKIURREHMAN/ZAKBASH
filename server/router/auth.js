const express = require('express')
const router = express.Router()
const signIn = require('../controlars/signIn')
const signUp = require('../controlars/signUp')
const {verifyOtp} = require('../controlars/otpController')
const {CloudinaryStorage} = require('multer-storage-cloudinary')
const multer = require('multer')
const cloudinary = require('../config/cloudinaryUrl')
const handleCloudinary = require('../controlars/cloudniry')

const storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:'User Profile',
    }
})


const upload = multer({storage})


router.post('/signup',signUp)
router.get('/signin',signIn)
router.post('/verify/otp',verifyOtp)
router.put('/user/profile',upload.single('image'),handleCloudinary)


module.exports = router