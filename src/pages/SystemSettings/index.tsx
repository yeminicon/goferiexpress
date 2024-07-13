import { Divider, Tab, Tabs } from "@nextui-org/react";
import { ProfitSettings } from "./Profit";
import { BannersAndPopSettings } from "./BannerPop";
import { FreightSetting } from "./Freight";
import { VisibilitySetting } from "./Visibility";
import { PurchaseSetting } from "./Purchase";
import PageHeader from "@/components/PageHeader";
import { KYCSettings } from "./Kyc";

function SystemSettingsPage(): JSX.Element {
  return (
    <div>
      <PageHeader title="System Settings" />
      <div className="flex flex-col space-y-8">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="underlined"
          classNames={{
            tabList: "gap-6",
            cursor: "w-full bg-[#1f2950]",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-[#1f2950] font-bold",
          }}
        >
          <Tab
            key="Start Campaigns"
            title={
              <div className="flex items-center space-x-2">
                <span>Profile settings</span>
              </div>
            }
          >
            <ProfitSettings />
            <Divider />
          </Tab>
          <Tab
            key="draft"
            title={
              <div className="flex items-center space-x-2">
                <span>Kyc Updates</span>
              </div>
            }
          >
            <KYCSettings />
          </Tab>
          <Tab
            key="purchase"
            title={
              <div className="flex items-center space-x-2">
                <span>Purchase setting</span>
                {/* <Chip size="sm" variant="faded">
                    1
                  </Chip> */}
              </div>
            }
          >
            <>
              <PurchaseSetting />
              <Divider />
              <FreightSetting />
              <Divider />
            </>
          </Tab>
          <Tab
            key="adds"
            title={
              <div className="flex items-center space-x-2">
                <span>Ad and Billing </span>
                {/* <Chip size="sm" variant="faded">
                    1
                  </Chip> */}
              </div>
            }
          >
            <>
              <VisibilitySetting />
              <Divider />
              <BannersAndPopSettings />
            </>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default SystemSettingsPage;
