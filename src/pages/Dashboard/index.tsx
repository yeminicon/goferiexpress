import DataGraph from "@/components/Dashboard/DataGraph.tsx";
import PageHeader from "@/components/PageHeader";
import { FaShuttleVan } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import RecentActivities from "./recendTransaction";

function Dashboard(): JSX.Element {
  return (
    <div>
      <PageHeader title="Analytics" />
      <div className="w-full border dark:border-dark p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm">
        <div className="flex md:flex-row flex-col">
          <div className="w-[70%] h-[100%] rounded-lg ">
            <div className="flex justify-between my-3 ">
              <h1 className="text-1xl font-bold text-[#212c5d]  dark:text-white ">Overviews</h1>
              <p className="text-1xl font-bold text-[#212c5d]  dark:text-white ">Sell all</p>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-0 md:flex-nowrap justify-between w-full relative">
              <DataGraph />
              <div className="flex gap-5 items-center absolute top-14 md:top-0 left-0 md:left-auto right-0">
                <Button variant="bordered" startContent={<FaShuttleVan />}>
                  <p>Date Filter</p>
                </Button>
              </div>
              <div className="flex gap-5 items-center absolute top-14 md:top-0 left-0 md:left-auto right-0"></div>
            </div>
          </div>

          <div className="w-[100%] md:w-[25%] mt-3 h-[100%] min-h-[400px] ml-6">
            <div>
              <h1 className="text-1xl font-bold text-[#212c5d]  dark:text-white ">
                Recent Transactions
              </h1>
            </div>

            <div className="w-[100%] pb-3  mt-4 h-[100%] min-h-[400px]  border-2 rounded-lg">
              <RecentActivities />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="md:mt-2 flex flex-col lg:flex-row gap-5 lg:gap-3"></div>
      {/* <div className="mt-6 lg:mt-8 flex flex-col lg:flex-row gap-5 lg:gap-3">
        <div className="lg:col-span-3 lg:w-[60%]">
          <TopSellingProducts />
        </div>
        <div className="lg:w-[40%] flex flex-col gap-5 lg:gap-4">
          <UsersOverview />
          <VendorsOverview />
        </div>
      </div> */}
    </div>
  );
}

export default Dashboard;
