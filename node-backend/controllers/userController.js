const User = require("../models/user");
const bcrypt = require("bcrypt");

const userController = {
  async registerUser(req, res) {
    const { userName, email, status, password } = req.body;

    try {
      const existingUser = await User.findByUsername(userName);

      if (existingUser) {
        return res.status(400).json({ error: "Email is already in use" });
      } else {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = await User.addUser(
          userName,
          email,
          status,
          hashedPassword
        );

        res.status(201).json({
          message: "User registered successfully",
          status: "success",
        });
      }
    } catch {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async loginUser(req, res) {
    const { userName, password } = req.body;  
    try {
      // Check the user on the database and bind properties
      const user = await User.findByUsername(userName);
  
      if (!user) {
        res.status(401).json({
          error: 'Invalid credentials, user not found.',
          status: 'false',
        });
        return; // Exit the function early if the user is not found
      }
  
      // Compare the provided password with the stored hashed password
      const passwordMatch = await bcrypt.compare(password, user.user_pwd);
  
      if (passwordMatch) {
        console.log("Password matched");
        // Passwords match, you can proceed with the login logic
        res.status(200).json({
          message: 'User logged in successfully',
          status: "success",
          userStatus: user.user_status
        });
      } else {
        console.log("Password does not match");
        // Passwords do not match
        res.status(401).json({
          error: 'Invalid credentials',
          status: "false",
        });
      }
    } catch (error) {
      console.error('Error logging user in:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async getTeamMembers(req, res){
    try{
      const members = await User.retrieveTeamList();
      console.log(members);

      if (members) {
        res.status(200).json({
          message: 'Team members list found',
          status: "success",
          teamList: members
        });
      } else {
        res.status(401).json({
          error: 'Member list not found',
          status: "false",
        });
      }
    } catch (error) {
      console.error('Error getting user list:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

module.exports = userController;