import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Image,
  Checkbox,
} from "@nextui-org/react";
import { FiShoppingBag } from "react-icons/fi";
import { vendorProductTableData } from "@/pages/Vendors/utils";
import UsersTablePagination from "../Users/usersTablePagination";

function VendorProductTable(): JSX.Element {
  return (
    <div className="flex flex-col gap-3 overflow-x-auto overflow-y-hidden">
      <Table
        color="primary"
        removeWrapper={true}
        aria-label="Vendor products table"
        classNames={{
          th: "bg-lightest font-normal text-dark dark:bg-dark text-xs dark:text-white px-5 py-3",
          td: "text-sm border-b-1 dark:border-dark h-16 px-5 text-gray-600 dark:text-white text-xs",
          thead: "table-header",
        }}
        bottomContent={
          <div className="flex w-full justify-center px-5 pb-4">
            <UsersTablePagination />
          </div>
        }
      >
        <TableHeader>
          <TableColumn>
            <div className="flex gap-2 items-center">
              <FiShoppingBag className="text-xl" />
              <p>Product name</p>
            </div>
          </TableColumn>
          <TableColumn>Categories</TableColumn>
          <TableColumn>Status</TableColumn>
        </TableHeader>
        <TableBody>
          {vendorProductTableData.map((data, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex gap-3 items-center">
                    <div className="flex gap-1">
                      <Checkbox radius="sm" />
                      <div>
                        <Image
                          width={40}
                          height={40}
                          radius="md"
                          alt={data.productName}
                          src={data.productImage}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">{data.productName}</h3>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{data.categories}</TableCell>
                <TableCell>
                  <div
                    className={`text-xs max-w-fit font-medium bg-gray-100 dark:bg-dark  px-3 py-1 rounded-2xl ${
                      data.status === "Best buy"
                        ? "text-yellow-500"
                        : data.status === "On Sales"
                          ? "text-red"
                          : data.status === "Just released"
                            ? "text-blue-700"
                            : data.status === "New"
                              ? "text-success-500"
                              : "text-yellow-500"
                    } flex justify-center items-center`}
                  >
                    {data.status}
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default VendorProductTable;
