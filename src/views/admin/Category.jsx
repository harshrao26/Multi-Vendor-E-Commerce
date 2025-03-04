import React, { useState } from "react";
import { IoMdCreate, IoMdTrash } from "react-icons/io";
import Pagination from "../../views/Pagination";

const Category = () => {
  // Sample Data
  const initialCategories = [
    { id: 1, name: "Electronics", image: "https://via.placeholder.com/50" },
    { id: 2, name: "Clothing", image: "https://via.placeholder.com/50" },
    { id: 3, name: "Furniture", image: "https://via.placeholder.com/50" },
    { id: 4, name: "Books", image: "https://via.placeholder.com/50" },
    { id: 5, name: "Toys", image: "https://via.placeholder.com/50" },
  ];

  // States
  const [categories, setCategories] = useState(initialCategories);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const showItem = 3; // Number of pagination buttons to show

  // Add Category States
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryImage, setNewCategoryImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // Pagination Logic
  const totalItems = categories.length;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentCategories = categories.slice(firstIndex, lastIndex);

  // Handle Image Upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewCategoryImage(file);
      setPreviewImage(URL.createObjectURL(file)); // Show preview of uploaded image
    }
  };

  // Handle Adding a New Category
  const handleAddCategory = () => {
    if (!newCategoryName || !newCategoryImage) {
      alert("Please enter a category name and select an image.");
      return;
    }

    const newCategory = {
      id: categories.length + 1,
      name: newCategoryName,
      image: previewImage, // Using the generated image URL for UI update
    };

    setCategories([...categories, newCategory]);
    setNewCategoryName("");
    setNewCategoryImage(null);
    setPreviewImage(null); // Reset preview
  };

  return (
    <div className="max-w-5xl mx-auto  bg-white shadow-lg rounded-lg p-6">
      {/* Add Category Section */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-3">Add Category</h3>
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Category Name Input */}
          <input
            type="text"
            placeholder="Enter category name"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg w-full md:w-1/3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          {/* File Upload Input */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border border-gray-300 px-3 py-2 rounded-lg w-full md:w-1/3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          {/* Image Preview */}
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="w-14 h-14 rounded-full border border-gray-300"
            />
          )}

          {/* Add Button */}
          <button
            onClick={handleAddCategory}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Category
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        {/* Header: Title + Items Per Page Dropdown */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          <h2 className="text-xl font-semibold">Category List</h2>

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
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-sm">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Image</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentCategories.map((category, index) => (
              <tr
                key={category.id}
                className={`text-center text-sm border-b transition ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="border px-4 py-2">{firstIndex + index + 1}</td>
                <td className="border px-4 py-2">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-10 h-10 mx-auto rounded-full"
                  />
                </td>
                <td className="border px-4 py-2">{category.name}</td>
                <td className=" px-4 py-2 flex justify-center space-x-3">
                  <button className="text-blue-500 hover:text-blue-700">
                    <IoMdCreate size={20} />
                  </button>
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

export default Category;
