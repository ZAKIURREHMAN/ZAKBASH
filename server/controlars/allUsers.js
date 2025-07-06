const profileUsers = require("../modules/userProfile");

const verifiedUsers = async (req, res) => {
  try {
    const user = await profileUsers.find({});
    return res
      .status(200)
      .json({ message: "All profileUsers here ", data: user });
  } catch (err) {
    return res.status(500).json({
      message: "Failed to retrieve verified users.",
      error: error.message,
    });
  }
};

const singleUser = async (req, res) => {
    const {id } = req.params;

    const user = await profileUsers.findOne({ userId:id });

    console.log(user)

    

    if(user){
    return res.status(200).json({ message: " Verified Users ", data: user,forwarded:true });
    }
    else{
        return res.status(500).json({
      message: "Profile is not Available",
      forwarded:false
    });
    }
};

module.exports = { verifiedUsers, singleUser };
