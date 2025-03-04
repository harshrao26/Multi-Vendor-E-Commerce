import React from "react";
import { FaDollarSign, FaShoppingCart, FaUsers, FaBox } from "react-icons/fa";
import Chart from "react-apexcharts";
import { FaEnvelope, FaUserCircle } from "react-icons/fa";
import RecentOrders from "../../components/RecentOrders";
const SellerDashboard = () => {
    const messages = [
      {
        id: 1,
        user: "John Doe",
        message: "Hey, I need some help with my order.",
        time: "2 mins ago",
      },
      {
        id: 2,
        user: "Jane Smith",
        message: "Can you update me on my shipment?",
        time: "10 mins ago",
      },
      {
        id: 3,
        user: "Alex Johnson",
        message: "Thanks for the quick response!",
        time: "30 mins ago",
      },
      {
        id: 4,
        user: "Emily Davis",
        message: "My payment is not going through.",
        time: "1 hour ago",
      },
      {
        id: 5,
        user: "Michael Brown",
        message: "Is there a discount available?",
        time: "2 hours ago",
      },
    ];
  const chartData = {
    series: [
      {
        name: "Orders",
        data: [100, 200, 300, 400, 500, 600],
      },
      {
        name: "Revenue",
        data: [
          45, 25, 90, 280000, 78, 554454, 567, 450000, 542, 350000, 380000, 433,
        ],
      },
      {
        name: "Sales",
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
          title="Total Orders"
          value="2,379"
          icon={<FaShoppingCart className="text-orange-600 text-2xl" />}
          bgColor="bg-orange-100"
        />
        <StatCard
          title="Pending Orders"
          value="20"
          icon={<FaUsers className="text-purple-600 text-2xl" />}
          bgColor="bg-purple-100"
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

      <div>
        <div className="bg-white shadow-lg rounded-lg p-6 mt-6  w-full max-w-5xl">
          {/* Header with View All Button */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Recent Customer Messages
            </h3>
            <button className="text-blue-600 text-sm hover:underline">
              View All
            </button>
          </div>

          {/* Messages List */}
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-100 transition"
              >
                {/* User Icon */}
                <FaUserCircle className="text-gray-500 text-3xl" />

                {/* Message Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-gray-800">{msg.user}</p>
                    <span className="text-sm text-gray-500">{msg.time}</span>
                  </div>
                  <p className="text-gray-600 text-sm truncate">
                    {msg.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <RecentOrders />
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

export default SellerDashboard;
