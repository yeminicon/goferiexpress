import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Tabs,
  Tab,
  Divider,
  Button,
  Input,
} from "@nextui-org/react";
import { FiUser } from "react-icons/fi";
import { LuChevronRight } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const tabData = [
  {
    id: "userEmail",
    label: "User Email",
  },
  {
    id: "userPhoneNumber",
    label: "User phone number",
  },
];

export type NotificationModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onOpenChange: () => void;
};

export function NotificationModal(props: NotificationModalProps): JSX.Element {
  return (
    <Modal size="xl" isOpen={props.isOpen} onOpenChange={props.onOpenChange}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{props.title}</ModalHeader>
        <ModalBody>
          <div>
            <Tabs fullWidth={true} size="lg" radius="md" items={tabData} aria-label="Dynamic tabs">
              {(item) => {
                return (
                  <Tab key={item.id} title={item.label} className="text-xs">
                    <div className="space-y-4">
                      <Divider orientation="horizontal" />
                      <div className="w-full border dark:border-dark py-2 px-3 flex justify-between items-center mt-5 rounded-lg">
                        <div className="flex gap-2 items-center">
                          <FiUser className="text-lg text-gray-600 dark:text-white" />
                          <div className="flex items-center py-1 px-3 gap-2 bg-slate-100 dark:bg-dark rounded-full">
                            <p>Olivia Rhye</p>
                            <IoClose className="text-lg text-gray-600 dark:text-white cursor-pointer" />
                          </div>
                          <div className="flex items-center py-1 px-3 gap-2 bg-slate-100 dark:bg-dark rounded-full">
                            <p>Olivia Rhye</p>
                            <IoClose className="text-lg text-gray-600 dark:text-white cursor-pointer" />
                          </div>
                        </div>
                        <LuChevronRight className="text-lg text-gray-600 dark:text-white" />
                      </div>
                      <div className="w-full mt-5 rounded-lg border dark:border-dark overflow-hidden">
                        <div className="px-5 pt-5 pb-2 h-80">
                          <Input type="text" placeholder="Type here" />
                        </div>
                        <div className="py-5 px-6 flex justify-end bg-slate-100 dark:bg-dark">
                          <Button color="primary" radius="sm">
                            Send
                          </Button>
                        </div>
                      </div>
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
