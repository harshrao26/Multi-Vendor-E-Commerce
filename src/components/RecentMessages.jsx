import React from "react";
import { FaEnvelope, FaUserCircle } from "react-icons/fa";

const RecentMessages = () => {
  // Dummy messages data
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

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6  w-full max-w-md">
      {/* Header with View All Button */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Recent Messages</h3>
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
              <p className="text-gray-600 text-sm truncate">{msg.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentMessages;
