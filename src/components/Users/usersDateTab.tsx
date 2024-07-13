import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { userDateTab } from "@/pages/Users/utils";
import StatsCard from "../Dashboard/statsCard";
import Loader from "../loader";

const UsersAnalyticsChart = React.lazy(() => import("./usersAnalyticsChart"));

function UsersDateTab(): JSX.Element {
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Dynamic tabs"
        items={userDateTab}
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
                  {item.statCardData.map((card, index) => {
                    return (
                      <StatsCard
                        key={index}
                        title={card.title}
                        figure={card.figure}
                        icon={card.icon}
                      />
                    );
                  })}
                </div>
                <React.Suspense
                  fallback={
                    <div className="h-[25rem]">
                      <Loader message="Loading graph..." />
                    </div>
                  }
                >
                  <UsersAnalyticsChart
                    categories={item.usersAnalyticsCategories}
                    dataSeries={item.usersAnalyticsDataSeries}
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

export default UsersDateTab;
