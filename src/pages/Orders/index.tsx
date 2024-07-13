import AllOrdersTable from "@/components/Wallet/allWalletsTable";
import OrdersDateTab from "@/components/Orders/ordersDateTab";
import PageHeader from "@/components/PageHeader";
import ExportStatsButton from "@/components/exportStatsButton";
import FilterByDateInput from "@/components/filterByDateInput";
import { Input } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";

function OrdersPage(): JSX.Element {
  return (
    <div>
      <PageHeader title="Orders" />
      <div className="w-full border dark:border-dark p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm">
        <div className="flex flex-wrap gap-4 md:gap-0 md:flex-nowrap justify-between w-full relative">
          <OrdersDateTab />
          <div className="flex gap-5 items-center absolute top-14 md:top-0 right-0">
            <FilterByDateInput />
            <ExportStatsButton />
          </div>
        </div>
      </div>
      <div className="w-full border dark:border-dark rounded-xl md:rounded-2xl shadow-sm mt-4 lg:mt-8">
        <div className="px-4 md:px-6 pt-4 md:pt-6">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium">All Orders</h3>
              <div className="text-xs font-medium text-primary px-2 py-1 bg-slate-200 dark:bg-dark rounded-full">
                234 200,000
              </div>
            </div>
            <div className="pt-1">
              <p className="text-base text-gray-500 dark:text-white">
                An overview of all orders placed
              </p>
            </div>
          </div>
          <div className="flex justify-end py-3">
            <div className="flex items-center gap-4">
              <div className="lg:w-96">
                <Input
                  type="text"
                  placeholder="Search by user, vendor and product"
                  size="sm"
                  fullWidth
                  radius="sm"
                  variant="bordered"
                  startContent={<FiSearch className="text-xl text-gray-400" />}
                  className="w-full"
                />
              </div>
              <FilterByDateInput />
            </div>
          </div>
        </div>
        <div>
          <AllOrdersTable />
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
