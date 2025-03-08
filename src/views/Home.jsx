import React from "react";
import { FaTachometerAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome to Admin Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Click on the{" "}
          <span className="font-semibold text-blue-600">Dashboard</span> button
          in the sidebar to manage your data.
        </p>
      </div>
    </div>
  );
};

export default Home;
