import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {

  const [user, setUser] = useState({ email: "", password: "" });

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
          <h1 className="text-gray-900 font-bold text-3xl mb-2">Sign In</h1>

          <form className="space-y-3">
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={inputHandler}
              value={user.email}
              className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={inputHandler}
              value={user.password}
              className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg transition"
              onClick={submitHandler}
            >
              Submit
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600 text-center">
            Have an account?{" "}
            <Link to="/register">
              <p className="text-blue-500">Register</p>
            </Link>
          </p>
        </div>

        {/* Right Section - Image & Calendar */}
        <div className="w-1/2 relative bg-gray-50 flex items-center justify-center p-6">
          <img
            src="https://source.unsplash.com/500x500/?team,meeting"
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

export default Login;
