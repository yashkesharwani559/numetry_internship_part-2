import express from "express";
import bcrypt from "bcryptjs";
import multer from "multer";
import User from "../models/User.js";   // Assuming your user model is exported using ES6
const router = express.Router();

// Set up multer storage (in-memory)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Signup route with image handling
router.post("/signup", upload.single("profilePic"), async (req, res) => {
  const { name, number, password } = req.body;
  const profilePic = req.file;

  try {
    const existingUser = await User.findOne({ number });
    if (existingUser) {
      return res.status(400).json({ message: "Number already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      number,
      password: hashedPassword,
      profilePic: {
        data: profilePic.buffer,
        contentType: profilePic.mimetype,
      },
    });

    await newUser.save();
    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { number, password } = req.body;
  try {
    const user = await User.findOne({ number });
    if (!user) return res.json({ success: false, message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ success: false, message: "Invalid password" });

    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
