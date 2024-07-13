import {
  Button,
  Chip,
  Image,
  Input,
  ModalBody,
  ModalHeader,
  Select,
  SelectItem,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import { useSetAtom } from "jotai";
import { PiCubeBold } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import UsersTablePagination from "@/components/Users/usersTablePagination";
import { modalViewAtom } from "@/store/settings.atom";
import ProductsVendorsDropdown from "@/components/Products/productsVendorsDropdown";
import { MakeChangesModal } from "./MakeChangesModal";

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

const filterAZ = [
  { value: "az", label: "Alphabetical (A-Z)" },
  { value: "za", label: "Alphabetical (Z-A)" },
];

export const BuyNowView = () => {
  const setModalView = useSetAtom(modalViewAtom);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <ModalHeader className="flex flex-col space-y-4">
        <div className="flex items-center gap-1">
          <span className="text-medium">System Setting</span>/{" "}
          <span className="text-dark">Buy Now Candidate Setting</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm">Advanced Buy Now Candidate Setting</span>
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
            <Select
              items={filterAZ}
              defaultSelectedKeys={["az"]}
              size="sm"
              label="Alphabetical"
              className="w-[170px]"
            >
              {(alph) => (
                <SelectItem key={alph.value} value={alph.value}>
                  {alph.label}
                </SelectItem>
              )}
            </Select>
            <ProductsVendorsDropdown />
          </div>
          <div>
            <Button color="primary" radius="sm" onClick={onOpen}>
              Make Changes
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
            <TableColumn className="dark:text-white dark:bg-dark">
              Buy Now Candidate Switch
            </TableColumn>
            <TableColumn className="dark:text-white dark:bg-dark">Status</TableColumn>
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
                        radius="md"
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
                  <Chip
                    variant="flat"
                    color={vendor.status === "buy" ? "success" : "warning"}
                    className="text-xs"
                  >
                    {vendor.status === "buy" ? " Buy Now" : "Request Quoute"}
                  </Chip>
                </TableCell>
                <TableCell>
                  <Button variant="light" onClick={() => setModalView("CATEGORY")}>
                    Open
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ModalBody>

      <MakeChangesModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};
