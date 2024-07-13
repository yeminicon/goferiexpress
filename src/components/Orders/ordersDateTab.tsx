import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import OrderPieChartCard from "./orderPieChartCard";
import StatsCard from "../Dashboard/statsCard";
import { FaShuttleVan } from "react-icons/fa";
import Loader from "../loader";
import { orderDateTab } from "@/pages/Orders/utils";

const OrderAnalyticsCharts = React.lazy(() => import("../Dashboard/AnalyticsCharts"));

const colors = ["#FF5722", "#FBB102", "#5872BA"];

function OrdersDateTab(): JSX.Element {
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Dynamic tabs"
        items={orderDateTab}
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
              <div>
                <div className="pt-16 md:pt-8 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
                  <OrderPieChartCard dataSeries={item.orderPieChartSeries} />
                  <StatsCard title="Total Orders" figure={item.totalOrders} icon={FaShuttleVan} />
                </div>
                <React.Suspense
                  fallback={
                    <div className="h-[30rem]">
                      <Loader message="Loading graph..." />
                    </div>
                  }
                >
                  <OrderAnalyticsCharts
                    categories={item.orderAnalyticsCategories}
                    dataSeries={item.orderAnalyticsDataSeries}
                    colors={colors}
                    orderAnalyticsParameters={
                      <div className="flex items-center gap-4">
                        <div className="flex gap-2 items-center">
                          <div className="w-2 h-2 bg-red rounded-full"></div>
                          <p className="text-xs font-medium">Cancelled</p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                          <p className="text-xs font-medium">Pending</p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <p className="text-xs font-medium">Fulfilled</p>
                        </div>
                      </div>
                    }
                  />
                </React.Suspense>
              </div>
            </Tab>
          );
        }}
      </Tabs>
    </div>
  );
}

export default OrdersDateTab;
