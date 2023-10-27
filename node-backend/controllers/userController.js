const User = require("../models/user");
const bcrypt = require("bcrypt");

const userController = {
  async registerUser(req, res) {
    const { name, email, status, password } = req.body;

    try {
      const existingUser = await User.findByEmail(email);

      if (existingUser) {
        return res.status(400).json({ error: "Email is already in use" });
      } else {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = await User.addUser(
          name,
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
    const { email, password } = req.body;
  
    try {
      // Check the user on the database
      const user = await User.findByEmail(email);
  
      if (!user) {
        res.status(401).json({
          error: 'Invalid credentials',
          status: 'false',
        });
        return; // Exit the function early if the user is not found
      }
  
      // Compare the provided password with the stored hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (passwordMatch) {
        console.log("Password matched");
        // Passwords match, you can proceed with the login logic
        res.status(200).json({
          message: 'User logged in successfully',
          status: "success",
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
  }
};