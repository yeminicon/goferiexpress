import {
  Button,
  Image,
  Input,
  ModalBody,
  ModalHeader,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useSetAtom } from "jotai";
import { FiSearch } from "react-icons/fi";
import { PiCubeBold } from "react-icons/pi";
import { visibilityModalViewAtom } from "@/store/settings.atom";
import ProductsVendorsDropdown from "@/components/Products/productsVendorsDropdown";
import UsersTablePagination from "@/components/Users/usersTablePagination";

const vendors = [
  {
    profileImage: "https://bit.ly/prosper-baba",
    name: "Prosper Baba",
    id: "TJUY76849",
    status: "buy",
  },
  {
    profileImage: "https://bit.ly/kent-c-dodds",
    name: "Kent Dodds",
    id: "TJUY768490",
    status: "request",
  },
];

export function VendorsView() {
  const setModalView = useSetAtom(visibilityModalViewAtom);

  return (
    <>
      <ModalHeader className="flex flex-col space-y-4">
        <div className="flex items-center gap-1">
          <span className="text-medium">System Setting</span>/{" "}
          <span className="text-dark">Visibility setting</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm">Advanced Vendor Visibility Setting</span>
            <span className="text-xs text-medium font-normal">
              Manage what shows up for your users
            </span>
          </div>
          <div className="">
            <Input
              type="text"
              placeholder="Search by vendor"
              size="sm"
              radius="sm"
              variant="bordered"
              startContent={<FiSearch className="text-xl text-gray-400" />}
              classNames={{
                inputWrapper: "py-0 border-1 dark:border-dark",
              }}
            />
          </div>
        </div>
      </ModalHeader>
      <ModalBody className="overflow-x-auto overflow-y-hidden my-3 space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <ProductsVendorsDropdown />
          </div>
          <div>
            <Button color="primary" radius="sm">
              Apply Changes
            </Button>
          </div>
        </div>
        <Table
          radius="sm"
          removeWrapper
          selectionMode="multiple"
          aria-label="Vendors table"
          bottomContent={
            <div className="flex w-full justify-center">
              <UsersTablePagination />
            </div>
          }
          className="shadow-none border-0"
        >
          <TableHeader>
            <TableColumn className="dark:text-white dark:bg-dark">
              <div className="flex gap-2 items-center">
                <PiCubeBold className="text-xl" />
                <span>Vendor/ID</span>
              </div>
            </TableColumn>
            <TableColumn className="dark:text-white dark:bg-dark">Visibility Switch</TableColumn>
            <TableColumn className="dark:text-white dark:bg-dark">Customise</TableColumn>
          </TableHeader>
          <TableBody>
            {vendors.map((vendor) => (
              <TableRow key={vendor.id}>
                <TableCell>
                  <div className="flex space-x-3">
                    <div>
                      <Image
                        width={40}
                        height={40}
                        radius="none"
                        alt={vendor.name}
                        src={vendor.profileImage}
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">{vendor.name}</h3>
                      <p className="text-xs font-normal text-gray-500 dark:text-white">
                        ID: #{vendor.id}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Switch size="sm" />
                </TableCell>
                <TableCell>
                  <Button color="primary" variant="light" onClick={() => setModalView("CATEGORY")}>
                    Open
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ModalBody>
    </>
  );
}
