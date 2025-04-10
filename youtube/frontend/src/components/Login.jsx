import React, { useState } from "react";
import "./AnimatedBackground.css"; // Import the CSS for animation
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      
      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);
      
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      // Handle error (show message to user)
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 animated-gradient"></div>

      {/* Login Box */}
      <div className="relative z-10 bg-gray-900 bg-opacity-80 p-10 rounded-2xl shadow-2xl w-96 backdrop-blur-md">
        <div className="flex justify-center mb-6">
          <img
            src="https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png"
            alt="Logo"
            className="w-10 h-10"
          />
        </div>
        <h2 className="text-white text-2xl text-center mb-2 font-semibold">
          Sign in
        </h2>
        <p className="text-gray-400 text-center mb-6">to continue to YouTube</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Email or phone</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <a href="#" className="text-blue-400 hover:underline text-sm">
              Forgot email?
            </a>
            <a href="#" className="text-blue-400 hover:underline text-sm">
              Learn more
            </a>
          </div>
          <div className="flex justify-between items-center mb-4">
            <a href="/signup" className="text-blue-400 hover:underline text-sm">
              Create account
            </a>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
            >
              Next
            </button>
          </div>
        </form>

        <div className="text-center text-gray-500 text-xs mt-8">
          <p>English (United Kingdom)</p>
          <div className="flex justify-center gap-4 mt-4 text-gray-400 text-xs">
            <a href="#" className="hover:underline">
              Help
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
