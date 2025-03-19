import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
  });
  const [profilePic, setProfilePic] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.password || !profilePic) {
      alert("Please fill all fields and select a profile picture.");
      return;
    }

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("number", formData.phone);
      data.append("password", formData.password);
      data.append("profilePic", profilePic);

      const response = await axios.post("http://localhost:5000/api/auth/signup", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 201) {
        alert("Signup successful! Please login.");
        navigate("/login");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2">Sign up</h2>
        <p className="text-center text-gray-500 mb-6">
          Create your account to get started
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <div>
            <label className="block text-gray-700 mb-1">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-xl p-2"
              required
            />
          </div>

          <p className="text-xs text-gray-500 text-center">
            By signing up, you agree to our{" "}
            <span className="text-green-600 cursor-pointer underline">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-green-600 cursor-pointer underline">
              Privacy Policy
            </span>
            .
          </p>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 font-semibold underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
