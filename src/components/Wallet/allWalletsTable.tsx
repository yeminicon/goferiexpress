import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  useDisclosure,
} from "@nextui-org/react";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";
import UsersTablePagination from "../Users/usersTablePagination";
import { allWalletsData } from "./utils/utils";
import { SidebarRoutes } from "@/types/routes";
import ViewOrderDetailsModal from "../Orders/viewOrderDetailsModal";
import { useState } from "react";

function AllWalletsTable(): JSX.Element {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allWalletsData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(allWalletsData.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="overflow-x-auto overflow-y-hidden">
      <Table
        radius="sm"
        removeWrapper
        aria-label="All orders table"
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
              <HiMiniShoppingCart className="text-xl" />
              <p>Order ID</p>
            </div>
          </TableColumn>
          <TableColumn>User</TableColumn>
          <TableColumn>Time of order</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Number of items</TableColumn>
          <TableColumn>Attachment</TableColumn>
        </TableHeader>
        <TableBody>
          {currentItems.map((order, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <div onClick={onOpen} className="cursor-pointer">
                    {order.orderId}
                  </div>
                </TableCell>
                <TableCell>
                  <Link to={SidebarRoutes.userDetails}>{order.username}</Link>
                </TableCell>
                <TableCell className="text-sm text-black dark:text-white">
                  {order.timeOfOrder}
                </TableCell>
                <TableCell>
                  <div
                    className={`text-xs max-w-fit bg-lightest dark:bg-dark px-3 py-1 rounded-2xl ${
                      order.status === "Pending"
                        ? "text-yellow-500"
                        : order.status === "Cancelled"
                          ? "text-red"
                          : order.status === "Fulfilled"
                            ? "text-success-500"
                            : "text-yellow-500"
                    } flex justify-center items-center`}
                  >
                    {order.status}
                  </div>
                </TableCell>
                <TableCell>{order.numberOfItems}</TableCell>
                <TableCell>{order.attachment}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <ViewOrderDetailsModal isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose} />
    </div>
  );
}

export default AllWalletsTable;
