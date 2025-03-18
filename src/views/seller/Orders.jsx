import React, { useState } from "react";
import Search from "../../components/Search";
import { IoMdCreate } from "react-icons/io";
import Pagination from "../../views/Pagination";
import { Link } from "react-router-dom";

const Orders = () => {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const showItem = 3; // Number of pagination buttons to show

  const initialOrders = [
    {
      id: 1,
      name: "Smartphone",
      brand: "Samsung",
      price: 799,
      paymentStatus: "Paid",
      orderStatus: "Shipped",
    },
    {
      id: 2,
      name: "Laptop",
      brand: "Apple",
      price: 1499,
      paymentStatus: "Pending",
      orderStatus: "Processing",
    },
    {
      id: 3,
      name: "T-Shirt",
      brand: "Nike",
      price: 35,
      paymentStatus: "Paid",
      orderStatus: "Delivered",
    },
    {
      id: 4,
      name: "Sofa",
      brand: "Ikea",
      price: 499,
      paymentStatus: "Failed",
      orderStatus: "Cancelled",
    },
    {
      id: 5,
      name: "Book",
      brand: "Penguin",
      price: 20,
      paymentStatus: "Paid",
      orderStatus: "Delivered",
    },
    {
      id: 6,
      name: "Smartphone",
      brand: "Samsung",
      price: 799,
      paymentStatus: "Paid",
      orderStatus: "Processing",
    },
    {
      id: 7,
      name: "Laptop",
      brand: "Apple",
      price: 1499,
      paymentStatus: "Pending",
      orderStatus: "Shipped",
    },
    {
      id: 8,
      name: "T-Shirt",
      brand: "Nike",
      price: 35,
      paymentStatus: "Paid",
      orderStatus: "Delivered",
    },
    {
      id: 9,
      name: "Sofa",
      brand: "Ikea",
      price: 499,
      paymentStatus: "Failed",
      orderStatus: "Cancelled",
    },
    {
      id: 10,
      name: "Book",
      brand: "Penguin",
      price: 20,
      paymentStatus: "Paid",
      orderStatus: "Delivered",
    },
  ];

  // State for Orders
  const [orders, setOrders] = useState(initialOrders);

  // Pagination Logic
  const totalItems = orders.length;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentOrders = orders.slice(firstIndex, lastIndex);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Search Bar */}
      <Search setItemsPerPage={setItemsPerPage} searchValue={searchValue} />

      <h1 className="text-2xl font-semibold text-gray-800 text-center">
        Orders <br />
        <Link to="/seller/dashboard/orders" className="text-sm text-blue-600">
          See All Orders
        </Link>
      </h1>

      <div className="overflow-x-auto mt-4">
        {/* Table */}
        <table className="w-full border-collapse border border-gray-300 shadow-sm">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-sm">
              <th className="border border-gray-300 px-4 py-2">Order ID</th>
              {/* <th className="border border-gray-300 px-4 py-2">Product Name</th> */}
              {/* <th className="border border-gray-300 px-4 py-2">Brand</th> */}
              <th className="border border-gray-300 px-4 py-2">Price ($)</th>
              <th className="border border-gray-300 px-4 py-2">
                Payment Status
              </th>
              <th className="border border-gray-300 px-4 py-2">Order Status</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, index) => (
              <tr
                key={order.id}
                className={`text-center text-sm border-b transition ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className=" px-4 py-2">{order.id}</td>
                {/* <td className="border px-4 py-2">{order.name}</td> */}
                {/* <td className="border px-4 py-2">{order.brand}</td> */}
                <td className=" px-4 py-2">${order.price}</td>
                <td className=" px-4 py-2">{order.paymentStatus}</td>
                <td className=" px-4 py-2">{order.orderStatus}</td>
                <td className=" px-4 py-2 flex justify-center">
                  {/* Edit Button (Pencil Icon) */}
                  <Link to={`/seller/dashboard/orders/details/12`} className="text-blue-500 hover:text-blue-700">
                    <IoMdCreate size={20} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Component */}
      <div className="mt-4">
        <Pagination
          pageNumber={currentPage}
          setPageNumber={setCurrentPage}
          totalItem={totalItems}
          perPage={itemsPerPage}
          showItem={showItem}
        />
      </div>
    </div>
  );
};

export default Orders;
