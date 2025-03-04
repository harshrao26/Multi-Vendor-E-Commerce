import React from "react";
import { FaDollarSign, FaShoppingCart, FaUsers, FaBox } from "react-icons/fa";
import Chart from "react-apexcharts";
import RecentMessages from '../../components/RecentMessages'
import RecentOrders from '../../components/RecentOrders'
const AdminDashboard = () => {
  const chartData = {
    series: [
      {
        name: "Orders",
        data: [
          100, 200, 300, 400, 500, 600,
        ],
      },
      {
        name: "Revenue",
        data: [
          45, 25, 90, 280000, 78, 554454, 567, 450000, 542, 350000, 380000, 433,
        ],
      },
      {
        name: "Sellers",
        data: [
          45, 25, 90, 4567, 78, 554454, 380000, 450000, 542, 350000, 567, 433,
        ],
      },
    ],
    options: {
      chart: {
        background: "transparent",
        type: "bar",
        height: 350,
        toolbar: { show: false },
      },
      colors: ["#4F46E5", "#34D399", "#F59E0B"],
      stroke: {
        width: 2,
        curve: "smooth",
      },
      grid: {
        borderColor: "#ddd",
        strokeDashArray: 5,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        labels: {
          style: { colors: "#888", fontSize: "12px" },
        },
      },
      yaxis: {
        labels: {
          formatter: (value) => `${value.toLocaleString()}`,
          style: { colors: "#666", fontSize: "12px" },
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "center",
        labels: { colors: "#333" },
      },
    },
  };

  return (
    <div className="px-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Sales"
          value="$400,000"
          icon={<FaDollarSign className="text-blue-600 text-2xl" />}
          bgColor="bg-blue-100"
        />
        <StatCard
          title="Total Products"
          value="1,000"
          icon={<FaBox className="text-green-600 text-2xl" />}
          bgColor="bg-green-100"
        />
        <StatCard
          title="Total Users"
          value="20,000"
          icon={<FaUsers className="text-purple-600 text-2xl" />}
          bgColor="bg-purple-100"
        />
        <StatCard
          title="Total Orders"
          value="2,379"
          icon={<FaShoppingCart className="text-orange-600 text-2xl" />}
          bgColor="bg-orange-100"
        />
      </div>

      {/* Sales Chart */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Sales Overview
        </h3>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={350}
        />
      </div>

      <div><RecentOrders /></div>

      <div>
        <RecentMessages />
      </div>
    </div>
  );
};

// Reusable StatCard Component
const StatCard = ({ title, value, icon, bgColor }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between w-full">
      {/* Icon */}
      <div className={`p-4 ${bgColor} rounded-full`}>{icon}</div>

      {/* Info */}
      <div className="text-right">
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-2xl font-semibold text-gray-800">{value}</h2>
      </div>
    </div>
  );
};

export default AdminDashboard;
