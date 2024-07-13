import { Input } from "@nextui-org/react";
import FilterByDateInput from "../filterByDateInput";
import { FiSearch } from "react-icons/fi";
import OrderReceiptCard from "./orderReceiptCard";
import { orderReceiptData } from "@/pages/Users/utils";

function OrderHistory(): JSX.Element {
  return (
    <div className="mt-2 md:mt-4 lg:mt-8 border dark:border-dark rounded-lg px-4 py-6">
      <div>
        <h3 className="font-medium text-lg">Order History</h3>
        <p className="text-sm mt-1 text-gray-600 dark:text-white font-normal">
          Tracking Your Memories
        </p>
      </div>
      <div className="my-8 flex justify-between items-center">
        <div className="lg:w-96">
          <Input
            type="text"
            placeholder="Search by Name, ID and Status"
            size="sm"
            fullWidth={true}
            radius="sm"
            variant="bordered"
            startContent={<FiSearch className="text-xl text-gray-500" />}
            className="w-full"
          />
        </div>
        <FilterByDateInput />
      </div>
      <div className="mt-8 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-5">
        {orderReceiptData.map((data, index) => {
          return (
            <OrderReceiptCard
              key={index}
              orderId={data.orderId}
              orderStatus={data.orderStatus}
              orderDate={data.orderDate}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OrderHistory;
