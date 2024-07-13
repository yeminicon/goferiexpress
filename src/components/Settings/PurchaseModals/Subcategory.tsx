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
import { modalViewAtom } from "@/store/settings.atom";
import UsersTablePagination from "@/components/Users/usersTablePagination";
import { FiSearch } from "react-icons/fi";
import ProductsCategoriesDropdown from "@/components/Products/productsCategoriesDropdown";
import { MakeChangesModal } from "./MakeChangesModal";

const categories = [
  { id: "serty", name: "Gift", status: "buy" },
  { id: "vrrrtgt", name: "Shaky", status: "req" },
  { id: "ffghj", name: "Twe Twe", status: "req" },
];

const filterAZ = [
  { value: "az", label: "Alphabetical (A-Z)" },
  { value: "za", label: "Alphabetical (Z-A)" },
];

export const SubCategorySettingModal = () => {
  const setModalView = useSetAtom(modalViewAtom);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <ModalHeader className="flex flex-col space-y-4">
        <div className="flex items-center gap-1">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setModalView("BUYNOW")}
          >
            <Image fallbackSrc src="https://bit.ly/kent-c-dodds" width={30} />
            <span className="text-medium">Big Vendor</span>
          </div>
          /{" "}
          <span className="cursor-pointer" onClick={() => setModalView("CATEGORY")}>
            Category Visibility setting
          </span>
          / <span className="text-dark">Subcategory setting</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm">Advanced Category Visibility Setting</span>
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
            <ProductsCategoriesDropdown />
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
            <TableColumn className="dark:text-white dark:bg-dark">Categories</TableColumn>
            <TableColumn className="dark:text-white dark:bg-dark">
              Buy Now Candidate Switch
            </TableColumn>
            <TableColumn className="dark:text-white dark:bg-dark">Status</TableColumn>
            <TableColumn className="dark:text-white dark:bg-dark">Customise</TableColumn>
          </TableHeader>
          <TableBody>
            {categories.map((vendor) => (
              <TableRow key={vendor.id}>
                <TableCell className="text-xs">{vendor.name}</TableCell>
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
                  <Button
                    variant="light"
                    onClick={() => setModalView("PRODUCT")}
                    className="text-xs"
                  >
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
