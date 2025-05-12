const sendOTP = require("./nodeMiller");
const bcrypt = require("bcrypt");
require("dotenv").config();
const User = require("../modules/user");
const { otpController } = require("../controlars/otpController");
const { signupJwt } = require("../jwt/signupjwt");

const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  const alreadyExistUser = await User.findOne({ email });

  // if (alreadyExistUser && alreadyExistUser.verify === true) {
  //   return res.status(501).json({ message: "This User is Already Register" });
  // }

  if (alreadyExistUser) {
    return res.status(501).json({ message: "This User is Already Register" });
  }

  let otpArr = [];
  const randomOtp = () => {
    let result = Math.ceil(Math.random() * 9);
    otpArr.push(result);
  };
  for (let i = 0; i < 4; i++) {
    randomOtp();
  }
  let strOtp = otpArr.join("");
  // const resultOtp = await sendOTP(email, strOtp);
  signupJwt(name, email);
  
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
  });
  
  otpController(newUser._id, strOtp);
  res.status(200).json({ message: "We Send OTP IN your account", newUser:newUser });
};

module.exports = signUp;
