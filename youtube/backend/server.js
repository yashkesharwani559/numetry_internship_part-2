import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'
import videoRoutes from './routes/videoRoutes.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/videos', videoRoutes)

// Signup endpoint
app.post('/api/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Here you would typically:
    // 1. Validate the input
    // 2. Hash the password
    // 3. Store user in database
    
    // For now, we'll just send a success response
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      user: {
        email,
        id: Date.now().toString()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating user',
      error: error.message
    });
  }
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => { console.log("Connected to MongoDB") })
    .catch(err => console.error('MongoDB connection error:', err))

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Something went wrong!' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})