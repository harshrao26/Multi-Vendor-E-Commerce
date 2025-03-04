import React from "react";
import { FaBars } from "react-icons/fa";

const Header = ({ showSideBar, setshowSideBar }) => {
  return (
    <div className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Sidebar Toggle (Mobile) */}
      <button
        onClick={() => setshowSideBar(!showSideBar)}
        className="lg:hidden text-gray-700"
      >
        <FaBars size={24} />
      </button>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 px-4 py-2 rounded-lg w-full max-w-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      {/* Profile */}
      <div className="flex items-center gap-4">
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="text-sm">
          <p className="font-semibold text-gray-800">Admin Name</p>
          <p className="text-gray-500">Admin</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
