import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import StatsCard from "./statsCard";
import Loader from "../loader";
import { dashboardDateTab } from "@/pages/Dashboard/utils";

const AnalyticsCharts = React.lazy(() => import("./AnalyticsCharts"));

const colors = ["#FBB102", "#5872BA"];

function DateTab(): JSX.Element {
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Dynamic tabs"
        items={dashboardDateTab}
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
                  {item.statCardData.map((card, index) => (
                    <StatsCard
                      key={index}
                      title={card.title}
                      figure={card.figure}
                      icon={card.icon}
                    />
                  ))}
                </div>
                <React.Suspense
                  fallback={
                    <div className="h-[30rem]">
                      <Loader message="Loading graph..." />
                    </div>
                  }
                >
                  <AnalyticsCharts
                    categories={item.orderAnalyticsCategories}
                    dataSeries={item.orderAnalyticsDataSeries}
                    colors={colors}
                    orderAnalyticsParameters={
                      <div className="flex items-center gap-4">
                        <div className="flex gap-2 items-center">
                          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                          <p className="text-xs font-medium">Successful Campaigns</p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <p className="text-xs font-medium">Failed Campaigns</p>
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

export default DateTab;
