import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { number, password });
      if (res.data.success && res.data.user) {
        console.log("User logged in:", res.data.user);
        // Redirect to dashboard
        navigate("/dashboard", { state: { user: res.data.user } });
      } else {
        alert(res.data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-green-50">
      <motion.div
        className="bg-white shadow-xl rounded-2xl p-8 w-80"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-green-700">Log in to Chatter-App</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="text"
            id="number"
            className="w-full border rounded-xl p-2 mb-4 focus:ring-2 focus:ring-green-400"
            placeholder="Enter your phone number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            id="password"
            className="w-full border rounded-xl p-2 mb-4 focus:ring-2 focus:ring-green-400"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded-xl hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
}
