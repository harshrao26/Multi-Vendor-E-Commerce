import React, { useState } from "react";
import Search from "../../components/Search";
import { IoMdCreate, IoMdTrash } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import Pagination from "../../views/Pagination";
import { Link } from "react-router-dom";
const DiscountProduct = () => {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const showItem = 3; // Number of pagination buttons to show

  const initialProducts = [
    {
      id: 1,
      name: "Smartphone",
      brand: "Samsung",
      price: 799,
      discount: 10,
      stock: 50,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Laptop",
      brand: "Apple",
      price: 1499,
      discount: 5,
      stock: 30,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "T-Shirt",
      brand: "Nike",
      price: 35,
      discount: 15,
      stock: 100,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      name: "Sofa",
      brand: "Ikea",
      price: 499,
      discount: 20,
      stock: 10,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 5,
      name: "Book",
      brand: "Penguin",
      price: 20,
      discount: 5,
      stock: 200,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 1,
      name: "Smartphone",
      brand: "Samsung",
      price: 799,
      discount: 10,
      stock: 50,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Laptop",
      brand: "Apple",
      price: 1499,
      discount: 5,
      stock: 30,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "T-Shirt",
      brand: "Nike",
      price: 35,
      discount: 15,
      stock: 100,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      name: "Sofa",
      brand: "Ikea",
      price: 499,
      discount: 20,
      stock: 10,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 5,
      name: "Book",
      brand: "Penguin",
      price: 20,
      discount: 5,
      stock: 200,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 1,
      name: "Smartphone",
      brand: "Samsung",
      price: 799,
      discount: 10,
      stock: 50,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Laptop",
      brand: "Apple",
      price: 1499,
      discount: 5,
      stock: 30,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "T-Shirt",
      brand: "Nike",
      price: 35,
      discount: 15,
      stock: 100,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      name: "Sofa",
      brand: "Ikea",
      price: 499,
      discount: 20,
      stock: 10,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 5,
      name: "Book",
      brand: "Penguin",
      price: 20,
      discount: 5,
      stock: 200,
      image: "https://via.placeholder.com/50",
    },
  ];

  // State for Products
  const [products, setProducts] = useState(initialProducts);

  // Pagination Logic
  const totalItems = products.length;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentProducts = products.slice(firstIndex, lastIndex);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Search Bar */}
      <Search setItemsPerPage={setItemsPerPage} searchValue={searchValue} />

      <h1 className="text-2xl font-semibold text-gray-800 text-center">
        All Products <br />
        <Link
          to="/seller/dashboard/products"
          className="text-sm text-blue-600 "
        >
          See All Products
        </Link>
      </h1>

      <div className="overflow-x-auto mt-4">
        {/* Table */}
        <table className="w-full border-collapse border border-gray-300 shadow-sm">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-sm">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Image</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Brand</th>
              <th className="border border-gray-300 px-4 py-2">Price ($)</th>
              <th className="border border-gray-300 px-4 py-2">Discount (%)</th>
              <th className="border border-gray-300 px-4 py-2">Stock</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => (
              <tr
                key={product.id}
                className={`text-center text-sm border-b transition ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="border px-4 py-2">{firstIndex + index + 1}</td>
                <td className="border px-4 py-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-10 h-10 mx-auto rounded-full"
                  />
                </td>
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">{product.brand}</td>
                <td className="border px-4 py-2">${product.price}</td>
                <td className="border px-4 py-2">{product.discount}%</td>
                <td className="border px-4 py-2">{product.stock}</td>
                <td className="items-center mt-2 px-4 py-2 flex justify-center space-x-3">
                  {/* Edit Button */}
                  <button className="text-blue-500 hover:text-blue-700">
                    <IoMdCreate size={20} />
                  </button>

                  {/* View Button */}
                  <button className="text-green-500 hover:text-green-700">
                    <FaEye size={20} />
                  </button>

                  {/* Delete Button */}
                  <button className="text-red-500 hover:text-red-700">
                    <IoMdTrash size={20} />
                  </button>
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

export default DiscountProduct;
