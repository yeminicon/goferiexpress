import { Link as RouterLink } from "react-router-dom";
import {
  Image,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  useDisclosure,
  Link,
  Avatar,
  Badge,
} from "@nextui-org/react";
import { PiUsers } from "react-icons/pi";
import { FiMessageSquare } from "react-icons/fi";
import { IoDiamondOutline } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { allUsersTable } from "@/pages/Users/utils";
import UsersTablePagination from "./usersTablePagination";
import UserMenuActionButton from "./menuActionButton";
import { SidebarRoutes } from "@/types/routes";
import { NotificationModal } from "../NotificationModal";

function UsersDataTable(): JSX.Element {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <div className="overflow-x-auto overflow-y-hidden">
      <Table
        radius="sm"
        removeWrapper
        aria-label="Total users table"
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
              <PiUsers className="text-xl" />
              <p>Users Name/ID</p>
            </div>
          </TableColumn>
          <TableColumn>User type</TableColumn>
          <TableColumn>Emails</TableColumn>
          <TableColumn>Gender</TableColumn>
          <TableColumn>Last active</TableColumn>
          <TableColumn>Country</TableColumn>
        </TableHeader>
        <TableBody>
          {allUsersTable.map((user, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <Link as={RouterLink} to={SidebarRoutes.userDetails}>
                    <div className="flex gap-3 items-center">
                      <div>
                        <Badge content="" color="success" size="sm" placement="bottom-right">
                          <Avatar radius="sm" src={user.profileImage} />
                        </Badge>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-white">
                        <h3 className="text-sm font-medium text-black dark:text-white">
                          {user.name}
                        </h3>
                        <span>ID: #{user.id}</span>
                      </div>
                    </div>
                  </Link>
                </TableCell>
                <TableCell>
                  <div
                    className={`text-xs max-w-fit bg-lightest dark:bg-dark px-3 py-1 rounded-2xl ${
                      user.userType === "Gold-VIP"
                        ? "text-yellow-500"
                        : user.userType === "Diamond-VIP"
                          ? "text-blue-500"
                          : "text-black dark:text-white"
                    } flex justify-center items-center gap-2`}
                  >
                    {user.userType === "Gold-VIP" ? (
                      <IoStarOutline />
                    ) : user.userType === "Diamond-VIP" ? (
                      <IoDiamondOutline />
                    ) : (
                      <></>
                    )}
                    <p>{user.userType}</p>
                  </div>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-10">
                    <Image
                      width={25}
                      height={25}
                      radius="full"
                      alt="Country Flag"
                      src={user.countryFlag}
                    />
                    <div className="flex items-center gap-5">
                      <div onClick={onOpen} className="cursor-pointer">
                        <FiMessageSquare className="text-xl" />
                      </div>
                      <div>
                        <UserMenuActionButton />
                      </div>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <NotificationModal
        title="People"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </div>
  );
}

export default UsersDataTable;
