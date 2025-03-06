import React from "react";

const Search = ({ setItemsPerPage, setSearchValue, searchValue }) => {
  return (
    <div className="flex items-center justify-between">
      {/* Number Of Items Show */}
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

      {/* Search Bar */}
      <div className="relative w-full md:w-auto">
        <input
          type="text"
          placeholder="Search orders..."
            value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <span className="absolute right-3 top-2 text-gray-400">🔍</span>
      </div>
    </div>
  );
};

export default Search;
