import {
  Image,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Link,
} from "@nextui-org/react";
import { FiShoppingBag } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa6";
import { topSellingProductData } from "@/pages/Dashboard/utils";
import UsersTablePagination from "../Users/usersTablePagination";

function TopSellingProducts(): JSX.Element {
  return (
    <div className="w-full py-3 border dark:border-dark rounded-xl md:rounded-xl shadow-sm">
      <div className="flex justify-between mb-2 px-4">
        <p className="px-4 py-2 text-base font-medium">Top selling product</p>
        <Link href="/dashboard/products" color="primary">
          Product management
        </Link>
      </div>
      <div className="overflow-x-auto overflow-y-hidden">
        <Table
          radius="none"
          removeWrapper
          aria-label="Top selling product table"
          bottomContent={
            <div className="flex w-full justify-center px-5 pb-1">
              <UsersTablePagination />
            </div>
          }
          classNames={{
            th: "dark:bg-dark text-xs dark:text-white px-5 py-3",
            td: "border-b-1 dark:border-dark h-16 px-5 text-gray-600 dark:text-white text-xs",
            thead: "table-header",
          }}
        >
          <TableHeader>
            <TableColumn>
              <div className="flex gap-2 items-center">
                <FiShoppingBag className="text-xl" />
                <p>Product name</p>
                <FaArrowUp className="text-xs" />
              </div>
            </TableColumn>
            <TableColumn>Vendor</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn>Revenue</TableColumn>
          </TableHeader>
          <TableBody>
            {topSellingProductData.map((data, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex gap-3">
                      <div>
                        <Image
                          width={40}
                          height={40}
                          radius="md"
                          alt={data.productTitle}
                          src={data.image}
                        />
                      </div>
                      <div>
                        <p className="text-sm text-black dark:text-white font-medium">
                          {data.productTitle}
                        </p>
                        <p>{data.productType}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-gray-600 dark:text-white">{data.vendor}</div>
                  </TableCell>
                  <TableCell>
                    <div
                      className={`text-xs max-w-fit font-medium bg-gray-100 dark:bg-dark px-3 py-1 rounded-2xl ${
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
                  <TableCell>
                    <div className="text-center">{data.revenue}</div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default TopSellingProducts;
