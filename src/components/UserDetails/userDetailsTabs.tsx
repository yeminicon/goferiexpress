import { Tabs, Tab } from "@nextui-org/react";
import UserInformation from "./userInformation";
import OrderHistory from "./orderHistory";
import CartItems from "./cartItems";
import UserAnalytics from "./userAnalytics";
import UserActivities from "./userActivities";

const tabs = [
  {
    id: "userInformation",
    label: "User Information",
    content: UserInformation,
  },
  {
    id: "orderHistory",
    label: "Order History",
    content: OrderHistory,
  },
  {
    id: "cartItems",
    label: "Cart Items",
    content: CartItems,
  },
  {
    id: "userAnalytics",
    label: "User analytics",
    content: UserAnalytics,
  },
  {
    id: "userActivities",
    label: "User Activities",
    content: UserActivities,
  },
];

function UserDetailsTabs(): JSX.Element {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Dynamic tabs" items={tabs} variant="underlined" color="primary">
        {(item) => {
          const TabComponent = item.content;
          return (
            <Tab key={item.id} title={item.label} className="text-base md:text-lg font-medium">
              <TabComponent />
            </Tab>
          );
        }}
      </Tabs>
    </div>
  );
}

export default UserDetailsTabs;
