import React, { useState, forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

// Prevent scroll jumps when using the mouse wheel
function handleOnWheel(event) {
  event.stopPropagation();
}

const outerElementType = forwardRef((props, ref) => {
  return <div ref={ref} onWheel={handleOnWheel} {...props} />;
});

// Helper function to generate random data
const generatePayments = (count) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    amount: `₹${(Math.random() * 5000 + 1000).toFixed(2)}`, // Random amount between 1000-6000
    status: "Pending",
    date: new Date(
      Date.now() + Math.floor(Math.random() * 365) * 24 * 60 * 60 * 1000
    ).toLocaleDateString(), // Random future date
  }));
};

const PaymentRequests = () => {
  const [payments, setPayments] = useState(generatePayments(15));
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Row renderer for virtualized list
  const Row = ({ index, style }) => {
    const payment = payments[index];

    const handleConfirm = () => {
      const updatedPayments = [...payments];
      updatedPayments[index].status = "Confirmed";
      setPayments(updatedPayments);
    };

    return (
      <div
        style={style}
        className={`flex items-center text-sm px-4 py-3 ${
          index % 2 === 0 ? "bg-gray-50" : "bg-white"
        } hover:bg-gray-100 transition duration-200 rounded-md`}
      >
        <div className="w-12 font-medium text-gray-700">{payment.id}</div>
        <div className="w-24 text-gray-600">{payment.amount}</div>
        <div
          className={`w-24 font-medium ${
            payment.status === "Pending" ? "text-yellow-600" : "text-green-600"
          }`}
        >
          {payment.status}
        </div>
        <div className="w-32 text-gray-500">{payment.date}</div>
        <div>
          {payment.status === "Pending" ? (
            <button
              onClick={handleConfirm}
              className="px-3 py-1 text-xs font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
            >
              Confirm
            </button>
          ) : (
            <span className="text-sm text-gray-400">✔ Confirmed</span>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Payment Requests
        </h2>
        {/* <div className="flex items-center gap-2">
          <label className="text-gray-600 font-medium">Show:</label>
          <select
            className="border border-gray-300 text-gray-700 px-3 py-2 rounded-lg bg-white focus:ring focus:ring-blue-200 transition"
            onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
          >
            <option value="5">5 per page</option>
            <option value="10">10 per page</option>
            <option value="20">20 per page</option>
          </select>
        </div> */}
      </div>

      {/* Table Header */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <div className="sticky top-0 bg-gray-100 text-gray-700 text-sm font-semibold flex border-b border-gray-300 px-4 py-2">
          <div className="w-12">#</div>
          <div className="w-24">Amount</div>
          <div className="w-24">Status</div>
          <div className="w-32">Date</div>
          <div>Action</div>
        </div>

        {/* Virtualized List */}
        <List
          style={{ minWidth: "340px" }}
          className="List"
          height={350}
          // itemCount={100}
          itemCount={payments.length}
          itemSize={45} // Slightly taller row height for better spacing
          outerElementType={outerElementType}
        >
          {Row}
        </List>
      </div>
    </div>
  );
};

export default PaymentRequests;
