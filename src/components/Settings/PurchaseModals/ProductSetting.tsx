import ProductsColorsDropdown from "@/components/Products/productsColorsDropdown";
import UsersTablePagination from "@/components/Users/usersTablePagination";
import { modalViewAtom } from "@/store/settings.atom";
import {
  Chip,
  Image,
  ModalBody,
  Switch,
  Table,
  TableColumn,
  TableRow,
  TableCell,
  ModalHeader,
  Input,
  Select,
  Button,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import { TableHeader, TableBody } from "@react-stately/table";
import { useSetAtom } from "jotai";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { MakeChangesModal } from "./MakeChangesModal";

const products = [
  {
    image: "https://bit.ly/prosper-baba",
    vendor: "Prosper Baba",
    name: "Yellow bag",
    id: "TJUY76890",
    status: "buy",
    vStatus: "Non Visible",
  },
  {
    image: "https://bit.ly/kent-c-dodds",
    vendor: "Kent Dodds",
    name: "Red bag",
    id: "TJUY768490",
    status: "request",
    vStatus: "Visible",
  },
];

const filterAZ = [
  { value: "az", label: "Alphabetical (A-Z)" },
  { value: "za", label: "Alphabetical (Z-A)" },
];

export function ProductSetting() {
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
          /{" "}
          <span className="cursor-pointer" onClick={() => setModalView("SUBCATEGORY")}>
            Subcategory setting
          </span>
          / <span className="text-dark">Product setting</span>
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
            <ProductsColorsDropdown />
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
                <FiShoppingBag className="text-xl" />
                <span>Product Name</span>
              </div>
            </TableColumn>
            <TableColumn className="dark:text-white dark:bg-dark">Vendor Name</TableColumn>
            <TableColumn className="dark:text-white dark:bg-dark">Status</TableColumn>
            <TableColumn className="dark:text-white dark:bg-dark">Visibility Status</TableColumn>
            <TableColumn className="dark:text-white dark:bg-dark">
              Buy Now Candidate Switch
            </TableColumn>
          </TableHeader>
          <TableBody>
            {products.map((prod) => (
              <TableRow key={prod.id}>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div>
                      <Image
                        width={40}
                        height={40}
                        radius="md"
                        alt={prod.vendor}
                        src={prod.image}
                      />
                    </div>

                    <span className="text-xs font-medium">{prod.vendor}</span>
                  </div>
                </TableCell>
                <TableCell className="text-xs">{prod.vendor}</TableCell>
                <TableCell>
                  <Chip
                    variant="flat"
                    color={prod.status === "buy" ? "success" : "warning"}
                    className="text-xs"
                  >
                    {prod.status === "buy" ? " Buy Now" : "Request Quoute"}
                  </Chip>
                </TableCell>
                <TableCell className="text-xs">{prod.vStatus}</TableCell>
                <TableCell>
                  <Switch size="sm" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ModalBody>
      <MakeChangesModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
