import React, { useState } from "react";
import { FaBox, FaTruck, FaUser, FaStore } from "react-icons/fa";

const OrderDetails = () => {
  // Sample Order Data with Multiple Sellers
  const order = {
    id: "ORD123456",
    date: "March 4, 2025",
    deliveryAddress: "123, Dubai Marina, UAE",
    paymentStatus: "Paid",
    totalPrice: "$320.00",
    sellers: [
      {
        id: 1,
        name: "Best Shoes Supplier",
        email: "seller1@example.com",
        contact: "+971 50 123 4567",
        logo: "https://via.placeholder.com/50",
        status: "Pending",
        products: [
          {
            id: 101,
            name: "Nike Air Max",
            brand: "Nike",
            image: "https://via.placeholder.com/100",
            quantity: 2,
          },
          {
            id: 102,
            name: "Adidas Ultraboost",
            brand: "Adidas",
            image: "https://via.placeholder.com/100",
            quantity: 1,
          },
        ],
      },
      
    ],
  };

  // State for seller-specific statuses
  const [sellerStatuses, setSellerStatuses] = useState(
    order.sellers.reduce((acc, seller) => {
      acc[seller.id] = seller.status;
      return acc;
    }, {})
  );

  // Function to update seller-specific status
  const handleStatusChange = (sellerId, newStatus) => {
    setSellerStatuses((prevStatuses) => ({
      ...prevStatuses,
      [sellerId]: newStatus,
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-xl rounded-lg  ">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
          <FaBox className="mr-2 text-blue-500" /> Order Details
        </h2>
      </div>

      {/* Order Information */}
      <div className="mt-5 space-y-3 bg-gray-100 p-4 rounded-lg shadow-sm">
        <p className="text-gray-700 flex items-center">
          <span className="font-semibold w-40">Order ID:</span> {order.id}
        </p>
        <p className="text-gray-700 flex items-center">
          <span className="font-semibold w-40">Date:</span> {order.date}
        </p>
        <p className="text-gray-700 flex items-center">
          <span className="font-semibold w-40">Delivery Address:</span>{" "}
          {order.deliveryAddress}
        </p>
        <p className="text-gray-700 flex items-center">
          <span className="font-semibold w-40">Payment Status:</span>{" "}
          <span
            className={`px-3 py-1 text-white text-sm font-semibold rounded ${
              order.paymentStatus === "Paid" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {order.paymentStatus}
          </span>
        </p>
        <p className="text-gray-700 flex items-center text-lg font-semibold">
          <span className="w-40">Total Price:</span> {order.totalPrice}
        </p>
      </div>

      {/* Loop Through Each Seller */}
      {order.sellers.map((seller) => (
        <div
          key={seller.id}
          className="mt-6 bg-white p-4 rounded-lg shadow-md border border-gray-200"
        >
          {/* Seller Information & Status */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={seller.logo}
                alt={seller.name}
                className="w-14 h-14 rounded-lg border border-gray-300 mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                  <FaStore className="mr-2 text-blue-500" /> {seller.name}
                </h3>
                <p className="text-gray-600 flex items-center">
                  <FaUser className="mr-2" /> {seller.email}
                </p>
                <p className="text-gray-600">{seller.contact}</p>
              </div>
            </div>

            {/* Status Dropdown */}
            <select
              className="border border-gray-300 p-2 rounded-lg text-gray-700 shadow-sm focus:outline-none transition duration-200 hover:bg-gray-100"
              value={sellerStatuses[seller.id]}
              onChange={(e) => handleStatusChange(seller.id, e.target.value)}
            >
              <option value="Pending">🟡 Pending</option>
              <option value="Processing">🔄 Processing</option>
              <option value="Warehouse">📦 Warehouse</option>
              <option value="Placed">✅ Placed</option>
              <option value="Rejected">🔴 Rejected</option>
              <option value="Delivered">🚚 Delivered</option>
            </select>
          </div>

          {/* Order Items from this Seller */}
          <div className="mt-4">
            <h4 className="text-md font-semibold text-gray-700 mb-3">
              Products from {seller.name}
            </h4>
            {seller.products.map((product) => (
              <div
                key={product.id}
                className="flex items-center bg-gray-50 p-4 rounded-lg mb-3 hover:shadow-lg transition duration-200 border border-gray-200"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 rounded-lg border border-gray-300"
                />
                <div className="ml-4 flex-1">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h4>
                  <p className="text-gray-500">{product.brand}</p>
                  <p className="text-gray-700 font-medium">
                    <span className="text-gray-500">Quantity:</span>{" "}
                    {product.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderDetails;
