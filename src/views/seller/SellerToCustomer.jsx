import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const sellersData = [
  { id: 1, name: "Seller One" },
  { id: 2, name: "Seller Two" },
  { id: 3, name: "Seller Three" },
];

const ChatSeller = () => {
  const [selectedSeller, setSelectedSeller] = useState(null);
  const [messages, setMessages] = useState({});
  const [inputMessage, setInputMessage] = useState("");

  const handleSellerClick = (seller) => {
    setSelectedSeller(seller);
    if (!messages[seller.id]) {
      setMessages((prev) => ({ ...prev, [seller.id]: [] }));
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim() || !selectedSeller) return;

    const newMessage = { text: inputMessage, sender: "user" };

    setMessages((prev) => ({
      ...prev,
      [selectedSeller.id]: [...(prev[selectedSeller.id] || []), newMessage],
    }));

    setInputMessage("");
  };

  return (
    <div className="flex px-4 mx-auto h-96 text-sm bg-gray-100  rounded-lg">
      {/* Left Sidebar - Seller List */}
      <div className=" bg-white p-4 ">
        <h2 className="text-xl font-bold mb-4 text-gray-700 ">Customers</h2>
        <ul>
          {sellersData.map((seller) => (
            <li
              key={seller.id}
              onClick={() => handleSellerClick(seller)}
              className={`flex items-center space-x-3 p-3 text-sm cursor-pointer transition ${
                selectedSeller?.id === seller.id
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <FaUserCircle className="text-2xl" />
              <span className="text-sm ">{seller.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side - Chat Box */}
      <div className="flex flex-col flex-1 bg-white text-sm  m4">
        {selectedSeller ? (
          <>
            {/* Header */}
            <div className="p-4 bg-blue-500 text-white  font-bold text-sm flex items-center">
              <FaUserCircle className="text-2xl mr-2" />
              {selectedSeller.name}
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto h-[70vh]">
              {messages[selectedSeller.id]?.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 p-3 max-w-xs rounded-lg ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white self-end ml-auto"
                      : "bg-gray-300 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input Box */}
            <div className="p-4 border-t flex items-center">
              <input
                type="text"
                className="flex-1 p-2 border rounded-lg focus:outline-none"
                placeholder="Type a message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center flex-1 text-gray-500">
            Select a seller to chat
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatSeller;
