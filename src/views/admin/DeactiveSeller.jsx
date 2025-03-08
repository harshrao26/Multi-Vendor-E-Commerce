import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import Pagination from "../../views/Pagination";

const Seller = () => {
  // Sample Data
 const initialSellers = [
   {
     id: 1,
     name: "John Doe",
     shopName: "Doe Electronics",
     image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIrNoYu8507EhJwnu42RuHRQtWY6I6pelOsA&s",
     paymentStatus: "Paid",
     email: "johndoe@example.com",
     division: "Dhaka",
     district: "Gulshan",
   },
   {
     id: 2,
     name: "Jane Smith",
     shopName: "Smith Fashion",
     image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAYjwaH4ujSQYdZX9J-RYvnXR7SjiJSJPjA&s",
     paymentStatus: "Pending",
     email: "janesmith@example.com",
     division: "Chittagong",
     district: "Agrabad",
   },
   {
     id: 3,
     name: "Mike Johnson",
     shopName: "Mike's Furniture",
     image:
       "https://media.istockphoto.com/id/495230028/photo/man-passport.jpg?s=612x612&w=0&k=20&c=VNkQgopA0Li9tj9nXvDyk_iqY6r_wVm8wVoV3aLuyXg=",
     paymentStatus: "Paid",
     email: "mikejohnson@example.com",
     division: "Khulna",
     district: "Shibganj",
   },
   {
     id: 4,
     name: "Sarah Lee",
     shopName: "Lee Books",
     image:
       "https://t4.ftcdn.net/jpg/05/86/07/29/360_F_586072952_aN7GB5yRKxaznFQX512KUMNAguJLpbrp.jpg",
     paymentStatus: "Pending",
     email: "sarahlee@example.com",
     division: "Barisal",
     district: "Banani",
   },
   {
     id: 5,
     name: "David Brown",
     shopName: "Brown Toys",
     image:
       "https://t3.ftcdn.net/jpg/00/48/21/44/360_F_48214407_qaZW7HYZ61w7eE272KzyVhNlw7KKOd64.jpg",
     paymentStatus: "Paid",
     email: "davidbrown@example.com",
     division: "Sylhet",
     district: "Mirpur",
   },
 ];


  // States
  const [sellers, setSellers] = useState(initialSellers);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const showItem = 3; // Number of pagination buttons to show

  // Pagination Logic
  const totalItems = sellers.length;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentSellers = sellers.slice(firstIndex, lastIndex);

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
      {/* Header: Title + Items Per Page Dropdown */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Deactivate Seller List</h2>

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
      <div className="overflow-x-auto bg-gray-100  shadow-md">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-zinc-700 text-sm">
              <th className="border border-gray-300 px-4 py-3">#</th>
              <th className="border border-gray-300 px-4 py-3">Image</th>
              <th className="border border-gray-300 px-4 py-3">Name</th>
              <th className="border border-gray-300 px-4 py-3">Shop Name</th>
           
              <th className="border border-gray-300 px-4 py-3">Email</th>
              <th className="border border-gray-300 px-4 py-3">Division</th>
              {/* <th className="border border-gray-300 px-4 py-3">District</th> */}
              <th className="border border-gray-300 px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentSellers.map((seller, index) => (
              <tr
                key={seller.id}
                className={`text-center text-sm border-b transition ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-200`}
              >
                <td className="border px-4 py-3 font-semibold">
                  {firstIndex + index + 1}
                </td>
                <td className="border px-4 py-3">
                  <img
                    src={seller.image}
                    alt={seller.name}
                    className="w-12 h-12 mx-auto rounded-full border border-gray-300 shadow-md"
                  />
                </td>
                <td className="border px-4 py-3 font-medium text-gray-800">
                  {seller.name}
                </td>
                <td className="border px-4 py-3 text-gray-600">
                  {seller.shopName}
                </td>
                
                <td className="border px-4 py-3 text-gray-700">
                  {seller.email}
                </td>
                <td className="border px-4 py-3 text-gray-600">
                  {seller.division}
                </td>
                {/* <td className="border px-4 py-3 text-gray-600">
                  {seller.district}
                </td> */}
                <td className=" px-4 py-3 flex justify-center items-center">
                  <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700 transition">
                    <IoMdEye size={20} />
                  </button>
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
          totalItem={totalItems}
          perPage={itemsPerPage}
          showItem={showItem}
        />
      </div>
    </div>
  );
};

export default Seller;
