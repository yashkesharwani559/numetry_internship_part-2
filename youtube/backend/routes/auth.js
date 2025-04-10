import express from 'express'
import User from '../models/User.js'
const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const existingUser = await User.findOne({ email, password });
        if (existingUser) {
            res.status(200).json({ message: "login successful" });
        } else {
            return res.status(400).json({ message: "Wrong credentials!!!" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });    
    }
});


// Signup API
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
