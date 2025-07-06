const User = require("../modules/user");

const findOneUser = async (req, res) => {

  // const token = req.headers?.authorized.split(' ')[1]

  // console.log(token)




  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({
      message: "This User is not Register on the Z-Chat application ",verified:false,
    });
  } else {
    return res
      .status(200)
      .json({ message: "This User is Verified ", verified: true,id:user._id });
  } 
};

module.exports = findOneUser;
