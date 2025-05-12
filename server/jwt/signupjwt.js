require('dotenv').config()
const jwt = require('jsonwebtoken')

const signupJwt = (userId,name,email)=>{
    const signatureKey = process.env.SIGNATURE_KEY;
    const token = jwt.sign({userId,name,email},signatureKey,{expiresIn: '1h',})
    return token
}

const verifyJwt = async (token) => {
  try {
    const signatureKey = process.env.SIGNATURE_KEY;
    const verifyToken = await jwt.verify(token, signatureKey);
    return verifyToken;
  } catch (err) {
    return null;
  }
};




module.exports = {signupJwt,verifyJwt}