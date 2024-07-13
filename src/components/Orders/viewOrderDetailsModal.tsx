import {
  Modal,
  ModalContent,
  ModalBody,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Image,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { CustomModalProps } from "@/pages/Users/users.interface";
import UsersTablePagination from "../Users/usersTablePagination";
import { FiShoppingBag } from "react-icons/fi";
import { allOrdersData } from "@/pages/Orders/utils";
import { ImAttachment } from "react-icons/im";
import OrderAttachmentModal from "./orderAttachmentModal";

function ViewOrderDetailsModal({ isOpen, onOpenChange }: CustomModalProps): JSX.Element {
  const orderAttachmentModal = useDisclosure();

  return (
    <div>
      <Modal size="5xl" isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
        <ModalContent>
          <ModalBody>
            <div className="mb-4">
              <div className="w-full border dark:border-dark rounded-lg my-5">
                <div className="flex flex-col items-start gap-2 text-sm font-medium px-6 py-5">
                  <h1 className="text-lg">Order list</h1>
                  <p className="text-gray-500 dark:text-white">
                    User: Rick Morty <span className="text-blue-700">(rickmorty@gmail.com)</span>
                  </p>
                  <p className="text-gray-500 dark:text-white">Order ID: 346785YHEKKSJND</p>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-gray-500 dark:text-white">Order time: 23:00 - 23/09</p>
                    <p>Order total: $300</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-4 overflow-x-auto overflow-y-auto h-[23rem]">
                  <Table
                    color="primary"
                    removeWrapper
                    aria-label="Order list details table"
                    bottomContent={
                      <div className="flex w-full justify-center px-5 pb-4">
                        <UsersTablePagination />
                      </div>
                    }
                    classNames={{
                      th: "bg-lightest font-normal text-dark dark:bg-dark text-xs dark:text-white px-5 py-3",
                      td: "border-b-1 dark:border-dark h-16 px-5 text-gray-600 dark:text-white text-xs",
                      thead: "table-header",
                    }}
                  >
                    <TableHeader>
                      <TableColumn>
                        <div className="flex gap-2 items-center">
                          <FiShoppingBag className="text-xl" />
                          <p>Product name</p>
                        </div>
                      </TableColumn>
                      <TableColumn>Vendor name</TableColumn>
                      <TableColumn>Time entered</TableColumn>
                      <TableColumn>Quantity</TableColumn>
                      <TableColumn>Attachments</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {allOrdersData.map((data, index) => {
                        return (
                          <TableRow key={index}>
                            <TableCell>
                              <div className="flex gap-3 items-center">
                                <div>
                                  <Image
                                    width={40}
                                    height={40}
                                    radius="md"
                                    alt={data.productName}
                                    src={data.productImage}
                                  />
                                </div>
                                <div>
                                  <h3>{data.productName}</h3>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{data.vendorName}</TableCell>
                            <TableCell className="text-sm text-black dark:text-white">
                              {data.timeOfOrder}
                            </TableCell>
                            <TableCell>{data.quantity}</TableCell>
                            <TableCell>
                              <Button
                                onPress={orderAttachmentModal.onOpen}
                                disabled={data.attachment < 1}
                                startContent={<ImAttachment />}
                                variant="light"
                                color={`${data.attachment < 1 ? "default" : "primary"}`}
                                className={`${data.attachment < 1 ? "text-gray-500" : "text-primary"}`}
                              >
                                Order attachment
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <Button color="success" className="text-white" radius="sm">
                  Approve order
                </Button>
                <Button variant="bordered" color="warning" radius="sm">
                  Keep pending
                </Button>
                <Button variant="light" color="danger" radius="sm">
                  Cancel order
                </Button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
      <OrderAttachmentModal
        isOpen={orderAttachmentModal.isOpen}
        onClose={orderAttachmentModal.onClose}
        onOpenChange={orderAttachmentModal.onOpenChange}
      />
    </div>
  );
}

export default ViewOrderDetailsModal;
