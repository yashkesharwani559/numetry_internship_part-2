import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";

import AuthImagePattern from "../components/AuthImagePattern";
import toast from "react-hot-toast";
import ChatIllustration from "../assets/chat-illustration.svg"; // Add an SVG or image in assets folder


const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) signup(formData);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-gradient-to-br from-violet-50 to-indigo-50">
      {/* left side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12 backdrop-blur-sm">
        <div className="w-full max-w-md space-y-8">
          {/* LOGO */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-16 rounded-2xl bg-gradient-to-tr from-primary/80 to-violet-500 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                <MessageSquare className="size-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold mt-4 bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">Create Account</h1>
              <p className="text-base-content/70 text-lg">Get started with your free account</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 backdrop-blur-md bg-white/50 p-8 rounded-2xl shadow-xl">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Full Name</span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="size-5 text-primary/60 group-hover:text-primary transition-colors" />
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full pl-11 bg-white/70 backdrop-blur-sm border-2 focus:border-primary/50 transition-all duration-300 rounded-xl"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Email</span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="size-5 text-primary/60 group-hover:text-primary transition-colors" />
                </div>
                <input
                  type="email"
                  className="input input-bordered w-full pl-11 bg-white/70 backdrop-blur-sm border-2 focus:border-primary/50 transition-all duration-300 rounded-xl"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Password</span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="size-5 text-primary/60 group-hover:text-primary transition-colors" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pl-11 bg-white/70 backdrop-blur-sm border-2 focus:border-primary/50 transition-all duration-300 rounded-xl"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-primary/60 hover:text-primary transition-colors" />
                  ) : (
                    <Eye className="size-5 text-primary/60 hover:text-primary transition-colors" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn w-full bg-gradient-to-r from-primary to-violet-500 hover:from-primary/90 hover:to-violet-600 text-white border-none rounded-xl py-3 shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300"
              disabled={isSigningUp}
            >
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-base-content/70 text-lg">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-primary hover:text-violet-500 transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />
    </div>
  );
};
export default SignUpPage;
