import React, { useState } from "react";
import { FaUserCircle, FaSpinner, FaEdit, FaSave } from "react-icons/fa";

const ProfileSection = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [profileInfo, setProfileInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    paymentsAccount: "Open",
    shopName: "My Shop",
    divisionName: "Dhaka",
    district: "Dhaka",
    subDistrict: "Mirpur",
  });
  const [changePassword, setChangePassword] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsImageLoading(true);
      // Simulate image upload delay
      setTimeout(() => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfileImage(reader.result);
          setIsImageLoading(false);
        };
        reader.readAsDataURL(file);
      }, 2000);
    }
  };

  // Handle profile info change
  const handleProfileInfoChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo({ ...profileInfo, [name]: value });
  };

  // Handle change password
  const handleChangePassword = (e) => {
    const { name, value } = e.target;
    setChangePassword({ ...changePassword, [name]: value });
  };

  // Save changes
  const handleSave = () => {
    setIsEditMode(false); // Exit edit mode after saving
    alert("Changes saved successfully!");
  };

  return (
    <div className="px-6 bg-gradient-to-r from-gray-50 to-gray-50 min-h-screen">
      <div className="max--4xl mx-auto">
        {/* Profile Card */}
        <div className="bg-white shadow-2xl overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
            <h1 className="text-2xl font-bold text-white">Profile Settings</h1>
          </div>

          {/* Profile Body */}
          <div className="p-6">
            {/* Profile Image Section */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                {isImageLoading ? (
                  <div className="flex items-center justify-center w-full h-full bg-gray-200">
                    <FaSpinner className="animate-spin text-2xl text-gray-600" />
                  </div>
                ) : (
                  <img
                    src={profileImage || FaUserCircle}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <label className="mt-4 bg-white text-blue-500 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-50 transition-all shadow-sm">
                <span>Change Image</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>

            {/* Edit Button */}
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setIsEditMode(!isEditMode)}
                className="flex items-center bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50 transition-all shadow-sm"
              >
                <FaEdit className="mr-2" />
                {isEditMode ? "Cancel Edit" : "Edit Profile"}
              </button>
            </div>

            {/* Profile Details Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {Object.keys(profileInfo).map((key) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                  </label>
                  <input
                    type="text"
                    name={key}
                    value={profileInfo[key]}
                    onChange={handleProfileInfoChange}
                    disabled={!isEditMode}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isEditMode
                        ? "border-blue-300 focus:border-blue-500 focus:ring-blue-500"
                        : "border-gray-200 bg-gray-100 cursor-not-allowed"
                    } transition-all`}
                  />
                </div>
              ))}
            </div>

            {/* Change Password Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Change Password</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.keys(changePassword).map((key) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </label>
                    <input
                      type={key.includes("Password") ? "password" : "text"}
                      name={key}
                      value={changePassword[key]}
                      onChange={handleChangePassword}
                      disabled={!isEditMode}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        isEditMode
                          ? "border-blue-300 focus:border-blue-500 focus:ring-blue-500"
                          : "border-gray-200 bg-gray-100 cursor-not-allowed"
                      } transition-all`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Save Button (Visible only in Edit Mode) */}
            {isEditMode && (
              <div className="flex justify-end">
                <button
                  onClick={handleSave}
                  className="flex items-center bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all shadow-md"
                >
                  <FaSave className="mr-2" />
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;