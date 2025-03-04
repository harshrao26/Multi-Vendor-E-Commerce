import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import Pagination from "../../views/Pagination";
import { Link } from "react-router-dom";

const SellerRequest = () => {
  // Sample Seller Requests Data
  const initialRequests = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      paymentStatus: "Active",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      paymentStatus: "Deactive",
      status: "Active",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mikejohnson@example.com",
      paymentStatus: "Active",
      status: "Deactive",
    },
    {
      id: 4,
      name: "Sarah Lee",
      email: "sarahlee@example.com",
      paymentStatus: "Deactive",
      status: "Deactive",
    },
    {
      id: 5,
      name: "David Brown",
      email: "davidbrown@example.com",
      paymentStatus: "Active",
      status: "Active",
    },
  ];

  // States
  const [requests, setRequests] = useState(initialRequests);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");

  // Pagination Logic
  const totalItems = requests.length;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  // Filtered & Paginated Data
  const filteredRequests = requests.filter(
    (req) =>
      req.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentRequests = filteredRequests.slice(firstIndex, lastIndex);

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
      {/* Header: Title + Search + Items Per Page */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Seller Requests
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        {/* Search Box */}
        <input
          type="text"
          placeholder="Search by name or email"
          className="border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none w-64"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Items Per Page Dropdown */}
        <div className="flex items-center gap-2">
          <label className="text-gray-600 font-medium">Show:</label>
          <select
            className="border border-gray-300 text-gray-700 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
          >
            <option value="5">5 per page</option>
            <option value="10">10 per page</option>
            <option value="20">20 per page</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-gray-100 shadow-md">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-zinc-700 text-sm">
              <th className="border border-gray-300 px-4 py-3">#</th>
              <th className="border border-gray-300 px-4 py-3">Name</th>
              <th className="border border-gray-300 px-4 py-3">Email</th>
              <th className="border border-gray-300 px-4 py-3">
                Payment Status
              </th>
              <th className="border border-gray-300 px-4 py-3">Status</th>
              <th className="border border-gray-300 px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRequests.map((request, index) => (
              <tr
                key={request.id}
                className={`text-center text-sm border-b transition ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-200`}
              >
                <td className="border px-4 py-3 font-semibold">
                  {firstIndex + index + 1}
                </td>
                <td className="border px-4 py-3 font-medium text-gray-800">
                  {request.name}
                </td>
                <td className="border px-4 py-3 text-gray-700">
                  {request.email}
                </td>
                <td
                  className={`border px-4 py-3 font-semibold rounded-lg ${
                    request.paymentStatus === "Active"
                      ? "text-green-600 bg-green-100"
                      : "text-red-600 bg-red-100"
                  }`}
                >
                  {request.paymentStatus}
                </td>
                <td
                  className={`border px-4 py-3 font-semibold rounded-lg ${
                    request.status === "Active"
                      ? "text-blue-600 bg-blue-100"
                      : "text-gray-600 bg-gray-100"
                  }`}
                >
                  {request.status}
                </td>
                <td className="px-4 py-3 flex justify-center items-center">
                  <Link
                    to="/admin/dashboard/seller/details/1"
                    className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700 transition"
                  >
                    <IoMdEye size={20} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Component */}
      <div className="mt-6">
        <Pagination
          pageNumber={currentPage}
          setPageNumber={setCurrentPage}
          totalItem={filteredRequests.length}
          perPage={itemsPerPage}
          showItem={3}
        />
      </div>
    </div>
  );
};

export default SellerRequest;
