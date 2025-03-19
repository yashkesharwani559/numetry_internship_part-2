import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function WhatsAppHomePage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-green-400 via-blue-500 to-purple-600">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-md w-full"
      >
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Welcome to Chatter-App</h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/login')}
          className="bg-green-500 hover:bg-green-600 transition text-white text-lg font-semibold py-3 px-8 rounded-2xl w-full mb-4 shadow-lg"
        >
          Login
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/signup')}
          className="bg-blue-500 hover:bg-blue-600 transition text-white text-lg font-semibold py-3 px-8 rounded-2xl w-full shadow-lg"
        >
          Signup
        </motion.button>
      </motion.div>
    </div>
  );
}
