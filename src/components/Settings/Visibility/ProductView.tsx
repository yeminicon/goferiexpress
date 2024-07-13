import {
  Image,
  ModalBody,
  Switch,
  Table,
  TableColumn,
  TableRow,
  TableCell,
  ModalHeader,
  Input,
  Button,
} from "@nextui-org/react";
import { TableHeader, TableBody } from "@react-stately/table";
import { useSetAtom } from "jotai";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { visibilityModalViewAtom } from "@/store/settings.atom";
import ProductsVendorsDropdown from "@/components/Products/productsVendorsDropdown";
import ProductsCategoriesDropdown from "@/components/Products/productsCategoriesDropdown";
import UsersTablePagination from "@/components/Users/usersTablePagination";
import ProductsSubCategoriesDropdown from "@/components/Products/productsSubCategoriesDropdown";

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

export function ProductView() {
  const setModalView = useSetAtom(visibilityModalViewAtom);

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
            <ProductsVendorsDropdown />
            <ProductsCategoriesDropdown />
            <ProductsSubCategoriesDropdown />
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
                <FiShoppingBag className="text-xl" />
                <span>Product Name</span>
              </div>
            </TableColumn>
            <TableColumn className="dark:text-white dark:bg-dark">Visibility Switch</TableColumn>
            <TableColumn className="dark:text-white dark:bg-dark">Visibility Status</TableColumn>
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
                <TableCell>
                  <Switch size="sm" />
                </TableCell>
                <TableCell className="text-xs">{prod.vStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ModalBody>
    </>
  );
}
