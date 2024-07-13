import { Tabs, Tab } from "@nextui-org/react";
import { productPricingTabs } from "@/pages/Products/utils";

function ProductPricing(): JSX.Element {
  return (
    <div className="mt-4">
      <Tabs
        aria-label="Dynamic tabs"
        items={productPricingTabs}
        variant="light"
        size="lg"
        radius="sm"
        classNames={{
          tabList: "gap-1 w-full relative p-1 border shadow rounded-lg bg-lightest",
          cursor: "w-full dark:bg-dark",
          tab: " h-11 rounded",
          tabContent: "px-16",
        }}
      >
        {(item) => {
          const AnalyticsComponent = item.content;
          return (
            <Tab key={item.id} title={item.label} className="text-sm">
              <AnalyticsComponent />
            </Tab>
          );
        }}
      </Tabs>
    </div>
  );
}

export default ProductPricing;
