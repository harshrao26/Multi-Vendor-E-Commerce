import React, { useState } from "react";
import { FaUpload, FaTimes } from "react-icons/fa";

const EditProduct = () => {
  const categorys = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
    { id: 3, name: "Furniture" },
    { id: 4, name: "Books" },
    { id: 5, name: "Toys" },
  ];

  const [categoryShow, setCategoryShow] = useState(false);
  const [category, setCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [allCategory, setAllCategory] = useState(categorys);

  const categorySearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value) {
      const filteredCategories = categorys.filter((c) =>
        c.name.toLowerCase().includes(value.toLowerCase())
      );
      setAllCategory(filteredCategories);
    } else {
      setAllCategory(categorys);
    }
  };

  const selectCategory = (name) => {
    setCategory(name);
    setSearchValue(name);
    setCategoryShow(false);
  };

  const [productData, setProductData] = useState({
    name: "",
    brand: "",
    category: "",
    stock: "",
    price: "",
    discount: "",
    description: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));

    setProductData((prev) => ({
      ...prev,
      images: [...prev.images, ...imageUrls],
    }));
  };

  const removeImage = (index) => {
    setProductData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data Submitted:", { ...productData, category });
    alert("Product Added Successfully!");
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Edit Product Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5 text-sm">
        <div>
          <label className="block text-gray-700 font-medium">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter product name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Brand Name</label>
          <input
            type="text"
            name="brand"
            value={productData.brand}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter brand name"
          />
        </div>

        {/* Category */}
        <div className="relative">
          <label className="block text-gray-700 font-medium">Category</label>
          <input
            type="text"
            readOnly
            value={searchValue}
            onChange={categorySearch}
            onFocus={() => setCategoryShow(true)}
            placeholder="Enter category"
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {categoryShow && (
            <div className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-md max-h-40 overflow-y-auto">
              {allCategory.length > 0 ? (
                allCategory.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => selectCategory(c.name)}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {c.name}
                  </div>
                ))
              ) : (
                <p className="p-2 text-gray-500">No matching categories</p>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 font-medium">Stock</label>
            <input
              type="number"
              name="stock"
              value={productData.stock}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter stock quantity"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Price ($)</label>
            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter product price"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Discount (%)
            </label>
            <input
              type="number"
              name="discount"
              value={productData.discount}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter discount (optional)"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter product description"
            rows="3"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">
            Upload Product Images
          </label>
          <div className="flex items-center space-x-3 mt-2">
            <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center">
              <FaUpload className="mr-2" /> Upload Images
              <input
                type="file"
                multiple
                onChange={handleImageUpload}
                className="hidden"
                accept="image/*"
              />
            </label>
          </div>

          {productData.images.length > 0 && (
            <div className="mt-4 grid grid-cols-7 gap-3">
              {productData.images.map((img, index) => (
                <div key={index} className="relative bg-gray-200">
                  <img
                    src={img}
                    alt="Product Preview"
                    className="h-24 rounded-lg border border-gray-300 object-cover"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <FaTimes size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
