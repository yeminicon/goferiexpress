import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Link,
} from "@nextui-org/react";
import { PiUsers } from "react-icons/pi";
import { FaArrowUp } from "react-icons/fa6";
import { usersOverviewTableData } from "@/pages/Dashboard/utils";
import { SidebarRoutes } from "@/types/routes";

function UsersOverview(): JSX.Element {
  return (
    <div className="w-full py-3 border dark:border-dark rounded-xl md:rounded-2xl shadow-sm">
      <div className="flex justify-between mb-2 px-4">
        <p className="px-4 py-2 text-base font-medium">Users overview</p>
        <Link href={SidebarRoutes.users} color="primary">
          User management
        </Link>
      </div>
      <Table
        radius="none"
        removeWrapper
        aria-label="Users overview table"
        classNames={{
          th: "dark:bg-dark text-xs dark:text-white px-5 py-3",
          td: "text-sm px-5 text-gray-600 dark:text-white text-xs",
          thead: "table-header",
        }}
      >
        <TableHeader>
          <TableColumn>
            <div className="flex gap-2 items-center">
              <PiUsers className="text-xl" />
              <p>Users Stats</p>
              <FaArrowUp className="text-xs" />
            </div>
          </TableColumn>
          <TableColumn>Total</TableColumn>
          <TableColumn>Progress</TableColumn>
        </TableHeader>
        <TableBody>
          {usersOverviewTableData.map((data, index) => {
            const progressColorClass =
              data.progress.charAt(0) === "+" ? "text-success-500" : "text-red";

            return (
              <TableRow
                key={index}
                className={`${index === usersOverviewTableData.length - 1 ? "" : "border-b-1 dark:border-dark h-16"}`}
              >
                <TableCell>
                  <div className="flex items-center gap-3 font-medium">
                    <div className="w-10 h-10 rounded-lg shadow dark:bg-dark flex justify-center items-center">
                      <h2 className="text-primary">{data.initial}</h2>
                    </div>
                    <div>
                      <h3>{data.title}</h3>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-gray-600 dark:text-white">{data.total}</div>
                </TableCell>
                <TableCell>
                  <p className={`${progressColorClass} text-center`}>{data.progress}</p>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default UsersOverview;
