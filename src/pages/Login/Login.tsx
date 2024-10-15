// pages/Login.tsx
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  // Define state for login and signup fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset error state
    setError("");

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      toast.error("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email.");
      toast.error("Please enter a valid email.");
      return;
    }

    // Handle signup validation
    if (isSignup && password !== confirmPassword) {
      setError("Passwords do not match.");
      toast.error("Passwords do not match.");
      return;
    }

    // Simulate form submission
    if (isSignup) {
      console.log("Signing up with", email, password);
      toast.success("Signup successful");
    } else {
      console.log("Logging in with", email, password);
      toast.success("Login successful");
    }

    // Clear form fields after submission
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignup ? "Sign Up" : "Login"}
        </h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Conditionally render confirm password field for sign up */}
          {isSignup && (
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Confirm your password"
              />
            </div>
          )}

          {/* Button to submit form */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <div className="mt-4 text-center">
          {isSignup ? (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => setIsSignup(false)}
                className="text-blue-500"
              >
                Log in
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <button
                onClick={() => setIsSignup(true)}
                className="text-blue-500"
              >
                Sign up
              </button>
            </p>
          )}
        </div>
      </div>

      {/* Toastify Container */}
      <ToastContainer />
    </div>
  );
};

export default Login;
