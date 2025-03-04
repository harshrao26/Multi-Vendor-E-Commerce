import React, { useState } from "react";
import {
  FaUserCircle,
  FaGlobe,
  FaPhone,
  FaMapMarkerAlt,
  FaFileUpload,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const SellerDetails = () => {
  const [status, setStatus] = useState("Active");

  return (
    <div className="max-w-5xl mx-auto bg-white p-6  rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center justify-center gap-2">
        {/* Status Dropdown */}
        <label className=" font-medium block text-gray-700">Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="mt-1 p-2 border rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Active"> Active</option>
          <option value="Deactive"> Deactive</option>
        </select>
      </div>
      {/* Seller Basic Info */}
      <div className="flex items-center space-x-4 border-b pb-4 justify-between">
        <div className="">
          <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-gray-600">📧 johndoe@example.com</p>
          <p className="text-gray-600 flex items-center">
            <FaPhone className="mr-2 text-blue-500" /> +1 234 567 890
          </p>
        </div>
        <FaUserCircle className="text-gray-500 text-7xl" />
      </div>

      {/* Business Details */}
      <div className="mt-6 ">
        <h3 className="text-lg font-semibold border-b pb-2 text-gray-800">
          🏢 Business Details
        </h3>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <p className="text-gray-700  ">
            <strong>Name:</strong> ABC Traders
          </p>
          <p className="text-gray-700  ">
            <strong>Email: </strong> abc@example.com
          </p>
          <p className="text-gray-700   flex items-center">
            <strong>Address: </strong> 123 Business St, City
          </p>
          <p className="text-gray-700  ">
            <strong>Owner Name: </strong> John Doe
          </p>
          <p className="text-gray-700   flex items-center">
            <strong>Website: </strong>{" "}
            <a
              href="https://example.com"
              className="text-blue-500 hover:underline"
            >
              example.com
            </a>
          </p>
        </div>
      </div>

      {/* Operational Details */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold border-b pb-2 text-gray-800">
          ⚙️ Operational Details
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <p className="text-gray-700">
            <strong>GST No:</strong> 12ABCDE3456F7G
          </p>
          <p className="text-gray-700">
            <strong>Category:</strong> Electronics
          </p>
          <p className="text-gray-700">
            <strong>Delivery Region:</strong> Nationwide
          </p>
        </div>
      </div>
      {/* Compliance Details */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold border-b pb-2 text-gray-800">
          📑 Compliance Details
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <p className="text-gray-700">
            <strong>ID Proof:</strong> Aadhar
          </p>
          <p className="text-gray-700 flex items-center">
            <FaFileUpload className="mr-2 text-blue-500" />
            <strong>Vendor Agreement:</strong>{" "}
            <button className="text-blue-500 underline hover:text-blue-600">
              Upload
            </button>
          </p>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold border-b pb-2 text-gray-800">
          📌 Additional Information
        </h3>
        <div className="mt-4 gap-4 grid grid-cols-2">
          <p className="text-gray-700">
            <strong>Years in Business:</strong> 5
          </p>
          <p className="text-gray-700">
            <strong>Customer Support:</strong> support@example.com
          </p>
        </div>

        {/* Social Media Links */}
        <div className="mt-4 flex space-x-4">
          <a href="#" className="text-blue-600 hover:text-blue-700">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-600">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-500">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
