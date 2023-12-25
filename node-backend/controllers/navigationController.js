const User = require("../models/user");

const navigationController = {
  async loadUserPaths(req, res) {
    const {userName} = req.body;
    console.log("backend reached with: " + userName);

    try {
      const existingUser = await User.findByUsername(userName);

      if (existingUser){
        console.log("user found and returned in backend");
        console.log('user status: ' + existingUser.user_status);
      }else{
        console.log('existing user is false, user not found');
      }
    } catch {
        console.error('Error finding user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = navigationController;