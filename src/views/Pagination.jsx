import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({
  pageNumber,
  setPageNumber,
  totalItem,
  perPage,
  showItem,
}) => {
  let totalPage = Math.ceil(totalItem / perPage);
  let startPage = pageNumber;
  let dif = totalPage - pageNumber;

  if (dif <= showItem) {
    startPage = totalPage - showItem + 1;
  }

  if (startPage < 1) {
    startPage = 1;
  }

  let endPage = startPage + showItem - 1;
  if (endPage > totalPage) {
    endPage = totalPage;
  }

  const createBtn = () => {
    const btn = [];
    for (let i = startPage; i <= endPage; i++) {
      btn.push(
        <li
          key={i}
          className={`w-10 h-10 mx-1 rounded-full cursor-pointer ${
            pageNumber === i
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          } flex items-center justify-center`}
          onClick={() => setPageNumber(i)}
        >
          {i}
        </li>
      );
    }
    return btn;
  };

  return (
    <div className="flex justify-center mt-4">
      <ul className="flex items-center space-x-2">
        {/* Previous Button */}
        {pageNumber > 1 && (
          <li
            className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full cursor-pointer"
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            <IoIosArrowBack />
          </li>
        )}

        {/* Page Numbers */}
        {createBtn()}

        {/* Next Button */}
        {pageNumber < totalPage && (
          <li
            className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full cursor-pointer"
            onClick={() => setPageNumber(pageNumber + 1)} // FIXED
          >
            <IoIosArrowForward />
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
