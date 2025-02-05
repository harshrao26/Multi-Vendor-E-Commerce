import React, { useState } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="flex h-screen w-full bg-gray-00 items-center justify-center">
      <div className="w-[900px] h-[550px] flex shadow-xl rounded-4xl overflow-hidden bg-white">
        <div className="w-1/2 bg-gradient-to-br from-yellow-100 to-yellow-300 px-12 flex flex-col justify-center">
          <h1 className="text-gray-900 font-bold text-3xl mb-2">
            Create an account
          </h1>

          <form className="space-y-3">
            <input
              type="text"
              name="name"
              required
              placeholder="Full name"
              className="w-full px-6 py-3 border rounded-4xl text-gray-700 focus:ring-2 focus:ring-yellow-400"
              onChange={inputHandler}
              value={user.name}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full px-6 py-3 border rounded-4xl text-gray-700 focus:ring-2 focus:ring-yellow-400"
              onChange={inputHandler}
              value={user.email}
            />
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              className="w-full px-6 py-3 border rounded-4xl text-gray-700 focus:ring-2 focus:ring-yellow-400"
              onChange={inputHandler}
              value={user.password}
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-3 rounded-4xl transition"
              onClick={submitHandler}
            >
              Submit
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600 text-center">
            Have an account?{" "}
            <Link to="/login">
              <p className="text-blue-500">Sign in</p>
            </Link>
          </p>
        </div>

        {/* Right Section - Image & Calendar */}
        <div className="w-1/2 relative bg-gray-50 flex items-center justify-center p-6">
          <img
            src="https://cdn.pixabay.com/animation/2022/12/05/10/47/10-47-58-930_512.gif"
            alt="Team"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />

          {/* Overlay Elements */}
          <div className="relative z-10 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
