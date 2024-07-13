import { Tabs, Tab } from "@nextui-org/react";
import { productCardsTabs } from "@/pages/Products/utils";

function ProductCardsDisplay(): JSX.Element {
  return (
    <div className="relative">
      <Tabs
        aria-label="Dynamic tabs"
        variant="light"
        items={productCardsTabs}
        classNames={{
          tabList: "gap-6 w-full absolute top-0 flex justify-end p-0",
          cursor: "w-full shadow-none bg-transparent dark:bg-transparent",
          tab: "max-w-fit px-0 h-10",
          tabContent: "group-data-[selected=true]:text-primary",
        }}
      >
        {(item) => {
          const CardComponent = item.content;
          const TabIcon = item.icon;
          return (
            <Tab
              key={item.id}
              title={
                <div className="flex items-center space-x-1">
                  <TabIcon size={16} />
                  <span>{item.label}</span>
                </div>
              }
              className="text-xs"
            >
              <CardComponent />
            </Tab>
          );
        }}
      </Tabs>
    </div>
  );
}

export default ProductCardsDisplay;
