import { newProductsTabs } from "@/pages/Products/utils";
import { CustomModalProps } from "@/pages/Users/users.interface";
import { Modal, ModalContent, ModalBody, Tabs, Tab, Input } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";

function NewProductsModal({ isOpen, onOpenChange }: CustomModalProps): JSX.Element {
  return (
    <Modal size="5xl" hideCloseButton isOpen={isOpen} onOpenChange={onOpenChange} className="pt-8">
      <ModalContent>
        <ModalBody>
          <div className="flex flex-wrap gap-4 md:gap-0 md:flex-nowrap items-center justify-between w-full relative">
            <div className="flex w-full flex-col">
              <Tabs
                aria-label="Dynamic tabs"
                items={newProductsTabs}
                variant="light"
                classNames={{
                  tabList: "gap-6 relative p-0",
                  cursor: "w-full shadow-none bg-transparent dark:bg-transparent",
                  tab: "max-w-fit p-0",
                  tabContent:
                    "px-0 text-lg font-semibold text-gray-500 dark:text-dark group-data-[selected=true]:text-xl group-data-[selected=true]:text-dark dark:group-data-[selected=true]:text-white",
                }}
              >
                {(item) => {
                  const AnalyticsComponent = item.content;
                  return (
                    <Tab key={item.id} title={item.label} className="text-lg">
                      <div className="h-[48rem] overflow-y-auto">
                        <AnalyticsComponent />
                      </div>
                    </Tab>
                  );
                }}
              </Tabs>
            </div>
            <div className="md:w-72 flex gap-5 items-center absolute top-14 md:top-0 left-0 md:left-auto right-0">
              <Input
                type="text"
                placeholder="Search by Name, Tags"
                size="sm"
                fullWidth={true}
                radius="sm"
                variant="bordered"
                startContent={<FiSearch className="text-xl text-gray-400" />}
                className="w-full"
              />
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default NewProductsModal;
