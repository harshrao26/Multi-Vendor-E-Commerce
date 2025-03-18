import { FaDollarSign } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useState } from "react";

const DashboardCards = () => {
  const cards = [
    {
      title: "Total Sale",
      amount: "$400,000",
      icon: <FaDollarSign className="text-blue-600 text-2xl" />, 
      bgColor: "bg-blue-100",
    },
    {
      title: "Available Amount",
      amount: "$50,000",
      icon: <MdAccountBalanceWallet className="text-green-600 text-2xl" />, 
      bgColor: "bg-green-100",
    },
    {
      title: "Withdrawal Amount",
      amount: "$350,000",
      icon: <GiTakeMyMoney className="text-orange-600 text-2xl" />, 
      bgColor: "bg-orange-100",
    },
    {
      title: "Pending Amount",
      amount: "$10,000",
      icon: <AiOutlineClockCircle className="text-purple-600 text-2xl" />, 
      bgColor: "bg-purple-100",
    },
  ];

  const [pendingRequests, setPendingRequests] = useState([
    { id: 1, amount: "$1,000", status: "Pending", date: "2024-03-18" },
  ]);
  const [successAmounts, setSuccessAmounts] = useState([
    { id: 1, amount: "$2,000", status: "Success", date: "2024-03-17" },
  ]);

  return (
    <div className="p-4">
      <div className="flex gap-4 mb-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex items-center bg-white p-4 rounded-lg shadow-md w-64"
          >
            <div className={`p-3 rounded-full ${card.bgColor}`}>{card.icon}</div>
            <div className="ml-4">
              <p className="text-gray-500 font-semibold">{card.title}</p>
              <h2 className="text-xl font-bold">{card.amount}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Send Request</h2>
          <input
            type="text"
            placeholder="Enter Amount"
            className="border p-2 rounded w-full mb-4"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
          <h3 className="mt-6 font-semibold">Pending Requests</h3>
          <table className="w-full mt-2 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">S.No</th>
                <th className="border p-2">Amount</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {pendingRequests.map((req) => (
                <tr key={req.id} className="text-center">
                  <td className="border p-2">{req.id}</td>
                  <td className="border p-2">{req.amount}</td>
                  <td className="border p-2 text-yellow-600">{req.status}</td>
                  <td className="border p-2">{req.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Success Amount</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">S.No</th>
                <th className="border p-2">Amount</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {successAmounts.map((amt) => (
                <tr key={amt.id} className="text-center">
                  <td className="border p-2">{amt.id}</td>
                  <td className="border p-2">{amt.amount}</td>
                  <td className="border p-2 text-green-600">{amt.status}</td>
                  <td className="border p-2">{amt.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;