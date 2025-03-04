import React from "react";

const RecentOrders = () => {
  // Dummy order data
  const orders = [
    { id: "#001", price: "$120.50", payment: "Paid", status: "Shipped" },
    { id: "#002", price: "$89.99", payment: "Pending", status: "Processing" },
    { id: "#003", price: "$200.00", payment: "Paid", status: "Delivered" },
    { id: "#004", price: "$49.99", payment: "Failed", status: "Cancelled" },
    { id: "#005", price: "$75.00", payment: "Paid", status: "Processing" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6 w-full">
      {/* Header with View All Button */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
        <button className="text-blue-600 text-sm hover:underline">
          View All
        </button>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="py-2 px-4">Order ID</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Payment Status</th>
              <th className="py-2 px-4">Order Status</th>
              <th className="py-2 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order.id}
                className={`border-b text-sm ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="py-2 px-4">{order.id}</td>
                <td className="py-2 px-4">{order.price}</td>
                <td
                  className={`py-2 px-4 font-semibold ${
                    order.payment === "Paid"
                      ? "text-green-600"
                      : order.payment === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {order.payment}
                </td>
                <td className="py-2 px-4">{order.status}</td>
                <td className="py-2 px-4 text-center">
                  <button className="text-white bg-blue-600 px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
