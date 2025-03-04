import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "../navigation/index";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ setshowSideBar, showSideBar }) => {
  const location = useLocation();
  const { pathname } = location;
  const [allNav, setAllNav] = useState([]);

  useEffect(() => {

    setAllNav(getNav("seller"));
  }, []);

  return (
    <>
      {/* Overlay for Mobile */}
      {showSideBar && (
        <div
          onClick={() => setshowSideBar(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[20%] bg-white  transform ${
          showSideBar ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out z-50 `}
      >
        {/* Close Button (Mobile Only) */}
        <div className="flex items-center justify-between px-6 py-4 border-b lg:hidden">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button
            onClick={() => setshowSideBar(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="mt-4">
          {allNav.map((nav, index) => (
            <li key={index}>
              <Link
                to={nav.path}
                className={`flex items-center gap-4 px-6 py-3 text-md font-medium rounded-md transition-all ${
                  pathname === nav.path
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {nav.icon &&
                  React.createElement(nav.icon, { className: "text-lg" })}
                {nav.title}
              </Link>
            </li>
          ))}
          {/* Logout */}
          <li>
            <Link
              to="/logout"
              className="flex items-center gap-4 px-6 py-3 text-md font-medium text-red-600 hover:bg-red-100 transition-all rounded-md"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
