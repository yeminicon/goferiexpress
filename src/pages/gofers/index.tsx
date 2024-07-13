import { Tabs, Tab } from "@nextui-org/react";
import UserDetailsHeroCard from "./userDetailsHeroCard";
import { AuthRoutes } from "@/types/routes";
import { vendorDetailsPageTab } from "./utils";
import Navbar from "../LandingPage/components/navbar";
import { useParams } from "react-router-dom";
import { listOfGoofers } from "../Expert/data";

function GoferDetails(): JSX.Element {

    const { id } = useParams<{ id: string | undefined}>();

    const filteredGofer = listOfGoofers.find((item) => item.id === id)
  return (
    <div>
      <Navbar />

      <div className="w-[1100px] mx-auto mt-20">
      <UserDetailsHeroCard backRoute={AuthRoutes.hire} filterItem={filteredGofer} userId={""}  />
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
                {/* Render the content of the current tab */}
                <TabComponent />
              </Tab>
            );
          }}
        </Tabs>
      </div>
      </div>
    </div>
  );
}

export default GoferDetails;
