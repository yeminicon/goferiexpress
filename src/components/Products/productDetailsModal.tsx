import { Modal, ModalContent, ModalBody, Tab, Tabs } from "@nextui-org/react";
import { CustomModalProps } from "@/pages/Users/users.interface";
import { productDetailsTabs } from "@/pages/Products/utils";

function ProductDetailsModal({ isOpen, onOpenChange }: CustomModalProps): JSX.Element {
  return (
    <Modal size="5xl" hideCloseButton isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalBody>
          <div className="pt-8 h-[100%]">
            <Tabs
              aria-label="Dynamic tabs"
              items={productDetailsTabs}
              variant="underlined"
              color="primary"
              classNames={{
                tabList: "gap-6 relative p-0",
                cursor: "w-full",
                tab: "max-w-fit p-0",
                tabContent: "px-0 text-lg font-medium text-dark dark:text-white",
              }}
            >
              {(item) => {
                const AnalyticsComponent = item.content;
                return (
                  <Tab key={item.id} title={item.label} className="text-lg">
                    <div className="h-[80vh] overflow-y-auto">
                      <AnalyticsComponent />
                    </div>
                  </Tab>
                );
              }}
            </Tabs>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ProductDetailsModal;
