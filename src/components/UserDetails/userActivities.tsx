import { userActivityTableData } from "@/pages/Users/utils";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import TablePagination from "../Dashboard/tablePagination";

function UserActivities(): JSX.Element {
  return (
    <div className="mt-2 md:mt-4 lg:mt-8 border dark:border-dark rounded-md py-6">
      <div className="lg:px-6">
        <h3 className="font-medium text-lg">User activities</h3>
        <p className="text-sm mt-1 text-gray-600 dark:text-white font-normal">
          Exploring Your User Activity by Diving into their Digital Footprint.
        </p>
      </div>
      <div className="flex justify-end py-3 px-4">
        <div className="w-96">
          <Input
            type="text"
            placeholder="Search by username/email/ID"
            size="sm"
            fullWidth={true}
            radius="sm"
            variant="bordered"
            startContent={<FiSearch className="text-xl text-gray-400" />}
            className="w-full"
          />
        </div>
      </div>
      <Table
        removeWrapper
        aria-label="User activity table"
        bottomContent={
          <div className="flex w-full justify-center px-4">
            <TablePagination />
          </div>
        }
        classNames={{
          th: "bg-lightest font-normal text-dark dark:bg-dark text-xs dark:text-white px-5 py-3",
          td: "border-b-1 dark:border-dark h-16 px-5 dark:text-white text-xs",
          thead: "table-header",
        }}
      >
        <TableHeader>
          <TableColumn>Activity</TableColumn>
          <TableColumn>Date</TableColumn>
        </TableHeader>
        <TableBody>
          {userActivityTableData.map((data, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{data.activity}</TableCell>
                <TableCell>{data.date}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default UserActivities;
