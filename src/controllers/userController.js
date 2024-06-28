const User = require('../models/User');

// User Registration
const registerUser = async (req, res) => {
   const { username, email, password } = req.body;
   
   try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// User Login
const loginUser = async (req, res) => {
  // Logic for user login
};

module.exports = {
  registerUser,
  loginUser,
};


