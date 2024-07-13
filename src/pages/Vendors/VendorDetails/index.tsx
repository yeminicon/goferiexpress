import { Tabs, Tab } from "@nextui-org/react";
import UserDetailsHeroCard from "@/components/userDetailsHeroCard";
import { SidebarRoutes } from "@/types/routes";
import { vendorDetailsPageTab } from "../utils";

function VendorDetails(): JSX.Element {
  return (
    <div>
      <UserDetailsHeroCard backRoute={SidebarRoutes.vendors} userId="Id347829YEOS" />
      <div className="mt-4 md:mt-14 lg:px-10 flex w-full flex-col">
        <Tabs
          aria-label="Dynamic tabs"
          items={vendorDetailsPageTab}
          variant="underlined"
          color="primary"
        >
          {(item) => {
            const TabComponent = item.id;
            return (
              <Tab key={item.id} title={item.label} className="text-base md:text-lg font-medium">
                <TabComponent />
              </Tab>
            );
          }}
        </Tabs>
      </div>
    </div>
  );
}

export default VendorDetails;
