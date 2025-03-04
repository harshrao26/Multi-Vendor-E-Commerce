import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  const [showSideBar, setshowSideBar] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      {/* Sidebar */}
      <div className="w-[20%] hidden lg:block">
        <Sidebar showSideBar={showSideBar} setshowSideBar={setshowSideBar} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full lg:w-[80%] ">
        {/* Header */}
        <Header showSideBar={showSideBar} setshowSideBar={setshowSideBar} />

        {/* Content */}
        <div className="py-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
