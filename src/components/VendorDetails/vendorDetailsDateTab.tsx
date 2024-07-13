import React from "react";
import { vendorProductSaleDateTab } from "@/pages/Vendors/utils";
import { Tabs, Tab } from "@nextui-org/react";
import Loader from "../loader";

const VendorProductSalesBarCharts = React.lazy(() => import("./vendorProductSalesBarCharts"));

function VendorDetailsDateTab(): JSX.Element {
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Dynamic tabs"
        items={vendorProductSaleDateTab}
        variant="light"
        color="primary"
        classNames={{
          tabList: "gap-2 relative p-0 border dark:border-dark shadow rounded-lg",
          cursor: "w-full",
          tab: "max-w-fit h-10 rounded-lg",
          tabContent: "px-1 dark:text-white",
        }}
      >
        {(item) => {
          return (
            <Tab key={item.id} title={item.label} className="text-xs">
              <React.Suspense
                fallback={
                  <div className="h-[21.25rem]">
                    <Loader message="Loading graph..." />
                  </div>
                }
              >
                <VendorProductSalesBarCharts
                  categories={item.vendorProductSalesCategories}
                  dataSeries={item.vendorProductSalesDataSeries}
                />
              </React.Suspense>
            </Tab>
          );
        }}
      </Tabs>
    </div>
  );
}

export default VendorDetailsDateTab;
