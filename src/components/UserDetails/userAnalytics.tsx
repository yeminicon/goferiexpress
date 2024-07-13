import React from "react";
import OrderHistoryCard from "./orderHistoryCard";
import QuotationRequestCard from "./quotationRequestCard";
import ViewedItemsCard from "./viewedItemsCard";
import Loader from "../loader";

const ActivityAnalytics = React.lazy(() => import("./activityAnalytics"));

function UserAnalytics(): JSX.Element {
  return (
    <div className="mt-2 md:mt-4 lg:mt-8">
      <h3 className="font-medium text-lg">User analytics</h3>
      <p className="text-sm mt-1 text-gray-600 dark:text-white">
        Graphic overview of user interaction
      </p>
      <React.Suspense
        fallback={
          <div className="h-[21.25rem]">
            <Loader message="Loading graph..." />
          </div>
        }
      >
        <div className="mt-8 lg:mt-16">
          <ActivityAnalytics />
        </div>
      </React.Suspense>
      <div className="mt-8 lg:mt-12">
        <h3 className="font-medium text-lg">User analytics</h3>
        <p className="text-sm mt-1 text-gray-600 dark:text-white">
          Graphic overview of user interaction
        </p>
        <div className="mt-8 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          <ViewedItemsCard />
          <OrderHistoryCard />
          <QuotationRequestCard />
        </div>
      </div>
    </div>
  );
}

export default UserAnalytics;
