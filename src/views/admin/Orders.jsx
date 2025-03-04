import React, { useState } from "react";
import {
  FaEye,
  FaFileDownload,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../../views/Pagination";
function Orders() {
  const [search, setSearch] = useState("");
  const [parPage, setParPage] = useState(5);
  const [expandedOrder, setExpandedOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Dummy Order Data
  const orders = [
    {
      id: "#001",
      price: "$120.50",
      payment: "Paid",
      status: "Shipped",
      items: [
        {
          name: "Wireless Headphones",
          seller: "Tech Store",
          price: "$50.00",
          quantity: 1,
        },
        {
          name: "Phone Charger",
          seller: "Gadget Hub",
          price: "$20.50",
          quantity: 2,
        },
      ],
    },
    {
      id: "#002",
      price: "$89.99",
      payment: "Pending",
      status: "Processing",
      items: [
        {
          name: "Laptop Bag",
          seller: "Bag World",
          price: "$89.99",
          quantity: 1,
        },
      ],
    },
    {
      id: "#003",
      price: "$200.00",
      payment: "Paid",
      status: "Delivered",
      items: [
        {
          name: "Smartwatch",
          seller: "Wearables Inc",
          price: "$200.00",
          quantity: 1,
        },
      ],
    },
  ];

  // Toggle dropdown for order details
  const toggleOrderDetails = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-5xl mx-auto">
      {/* Header: Dropdown + Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
        {/* Items Per Page Dropdown */}
        <div className="flex items-center gap-2">
          <label className="text-gray-600 font-medium">Show:</label>
          <select
            className="border border-gray-300 text-gray-700 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onChange={(e) => setParPage(parseInt(e.target.value))}
          >
            <option value="5">5 per page</option>
            <option value="10">10 per page</option>
            <option value="20">20 per page</option>
          </select>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Search orders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <span className="absolute right-3 top-2 text-gray-400">🔍</span>
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="py-3 px-4">Order ID</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Payment Status</th>
              <th className="py-3 px-4">Order Status</th>
              <th className="py-3 px-4 text-center">Actions</th>
              {/* <th className="py-3 px-4 text-center">Download</th> */}
            </tr>
          </thead>
          <tbody>
            {orders.slice(0, parPage).map((order, index) => (
              <React.Fragment key={order.id}>
                {/* Order Row */}
                <tr
                  className={`border-b text-sm hover:bg-gray-100 transition ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td
                    className="py-3 px-4 cursor-pointer flex items-center gap-2"
                    onClick={() => toggleOrderDetails(order.id)}
                  >
                    {order.id}
                    {expandedOrder === order.id ? (
                      <FaChevronUp className="text-gray-500" />
                    ) : (
                      <FaChevronDown className="text-gray-500" />
                    )}
                  </td>
                  <td className="py-3 px-4">{order.price}</td>

                  {/* Payment Status with Color */}
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-lg ${
                        order.payment === "Paid"
                          ? "bg-green-100 text-green-600"
                          : order.payment === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {order.payment}
                    </span>
                  </td>

                  {/* Order Status with Color */}
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-lg ${
                        order.status === "Shipped"
                          ? "bg-blue-100 text-blue-600"
                          : order.status === "Processing"
                          ? "bg-yellow-100 text-yellow-600"
                          : order.status === "Delivered"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  {/* View Button */}
                  <td className="py-3 px-3 text-center">
                    <Link
                      to="/admin/dashboard/order/details/1"
                      className="flex items-center gap-2 justify-center text-white bg-blue-600 px- py-2 rounded-md text-sm hover:bg-blue-700 transition"
                    >
                      <FaEye /> View
                    </Link>
                  </td>

                  {/* Download Button */}
                  {/* <td className="py-3 px-3 text-center">
                    <Link className="flex items-center justify-center gap-2 text-white bg-green-600 px- py-2 rounded-md text-sm hover:bg-green-700 transition">
                      <FaFileDownload /> Download
                    </Link>
                  </td> */}
                </tr>

                {/* Order Details (Expandable) */}
                {expandedOrder === order.id && (
                  <tr className="bg-gray-50">
                    <td colSpan="6" className="p-4">
                      <h4 className="text-gray-700 font-semibold mb-2">
                        Order Details
                      </h4>
                      <div className="space-y-2">
                        {order.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between p-2 bg-white rounded-lg shadow-sm"
                          >
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-gray-500 text-sm">
                                Seller: {item.seller}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">{item.price}</p>
                              <p className="text-gray-500 text-sm">
                                Qty: {item.quantity}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Pagination
          pageNumber={currentPage}
          setPageNumber={setCurrentPage}
          totalItem={50}
          perPage={parPage}
          showItem={3}
        />
      </div>
    </div>
  );
}

export default Orders;
