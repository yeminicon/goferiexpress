import { Divider } from "@nextui-org/react";
import React, { useState } from "react";

type Props = {};

const RecentActivities = (props: Props) => {
  const ListOfTransaction = [
    {
      type: "Successful",
      gofer: "Kingsley Nancui",
      date: "24-04-2024",
      payment: "paid",
    },
    {
      type: "Failed",
      gofer: "Akinyele Adeyemi",
      date: "24-04-2024",
      payment: "failed",
    },
    {
      type: "Pending",
      gofer: "Anotonia Usefuli",
      date: "24-04-2024",
      payment: "reversed",
    },
    {
      type: "Successful",
      gofer: "Jack Brew",
      date: "24-04-2024",
      payment: "done",
    },
    {
      type: "Successful",
      gofer: "Kingsley Nancui",
      date: "24-04-2024",
      payment: "paid",
    },
    {
      type: "Failed",
      gofer: "Akinyele Adeyemi",
      date: "24-04-2024",
      payment: "failed",
    },
    {
      type: "Pending",
      gofer: "Anotonia Usefuli",
      date: "24-04-2024",
      payment: "reversed",
    },
    {
      type: "Successful",
      gofer: "Jack Brew",
      date: "24-04-2024",
      payment: "done",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ListOfTransaction.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(ListOfTransaction.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div>
        {currentItems.map((item, index) => (
          <div key={index} className="w-[90%] mx-auto p-3">
            <div className="flex flex-row items-center space-x-4 justify-between">
              <div className="flex mb-2">
                <div
                  className={`border-2 w-10 h-10 rounded-full flex items-center justify-center ${
                    item.type === "Successful"
                      ? "border-blue-500"
                      : item.type === "Pending"
                        ? "border-yellow-500"
                        : "border-orange-500"
                  }`}
                >
                  {item.gofer.slice(0, 1)}
                </div>
                <div className="flex flex-col ml-1">
                  <p className="text-[1rem] font-bold text-lg  dark:text-white text-[#090f29]">{item.gofer}</p>
                  <p className="text-[0.75rem] font-light text-[#606786]">{item.date}</p>
                </div>
              </div>
              <div className="text-green ml-6">{item.payment}</div>
            </div>
            <Divider />
          </div>
        ))}

        <div className="flex justify-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 mx-2 border rounded-full disabled:opacity-50"
          >
            Prev.
          </button>
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`px-3 py-1 mx-1 border rounded-full ${
                currentPage === number ? "bg-gray-300" : ""
              }`}
            >
              {number}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 mx-2 border rounded-full disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default RecentActivities;
