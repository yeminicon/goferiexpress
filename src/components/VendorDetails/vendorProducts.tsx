import React from "react";
import { Button, Input, useDisclosure } from "@nextui-org/react";
import ExportStatsButton from "../exportStatsButton";
import { FiSearch } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import DeleteVendorProductModal from "./deleteVendorProductModal";
import VendorProductTable from "./vendorProductTable";
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import FilterByDateInput from "../filterByDateInput";
import VendorDetailsDateTab from "./vendorDetailsDateTab";
import SelectProductAlphabetically from "../Products/selectProductAlphabetically";
import ProductsCategoriesDropdown from "../Products/productsCategoriesDropdown";
import ProductsSubCategoriesDropdown from "../Products/productsSubCategoriesDropdown";

function VendorProducts(): JSX.Element {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <div className="mt-2 md:mt-4 lg:mt-8">
      <div
        onClick={() => setIsClicked(!isClicked)}
        className="w-full bg-slate-200 dark:bg-dark py-3 cursor-pointer mb-6"
      >
        <div className="flex justify-center items-center gap-3">
          {isClicked ? (
            <MdOutlineKeyboardDoubleArrowUp className="text-primary dark:text-white" size={18} />
          ) : (
            <MdOutlineKeyboardDoubleArrowDown className="text-primary dark:text-white" size={18} />
          )}
          <p className="text-sm font-medium text-gray-700 dark:text-white">
            Click to {isClicked ? "hide" : "display"} product graph
          </p>
        </div>
      </div>
      {isClicked && (
        <div className="w-full border dark:border-dark mb-2 md:mb-6 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm">
          <div className="flex flex-wrap gap-4 md:gap-0 md:flex-nowrap justify-between w-full relative">
            <VendorDetailsDateTab />
            <div className="flex gap-5 items-center absolute top-14 md:top-0 right-0">
              <FilterByDateInput />
              <ExportStatsButton />
            </div>
          </div>
        </div>
      )}
      <div className="w-full border dark:border-dark rounded-xl md:rounded-2xl shadow-sm">
        <div className="px-4 md:px-6 pt-4 md:pt-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0 justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium">All vendor products</h3>
                <div className="text-xs font-medium text-primary px-2 py-1 bg-slate-200 dark:bg-dark rounded-full">
                  24,000 Items
                </div>
              </div>
              <div className="pt-1">
                <p className="text-base text-gray-500 dark:text-white">
                  Manage, monitor, and organize this vendor product catalog with ease
                </p>
              </div>
            </div>
            <div>
              <ExportStatsButton />
            </div>
          </div>
          <div className="flex items-center flex-wrap lg:flex-nowrap justify-between pt-8 pb-3">
            <div className="w-full flex items-center flex-wrap md:flex-nowrap gap-3">
              <SelectProductAlphabetically />
              <ProductsCategoriesDropdown />
              <ProductsSubCategoriesDropdown />
            </div>
            <div className="flex items-center gap-8 mt-4 lg:mt-0">
              <div className="md:w-96">
                <Input
                  type="text"
                  placeholder="Search by Name, and Categories"
                  size="sm"
                  fullWidth
                  radius="sm"
                  variant="bordered"
                  startContent={<FiSearch className="text-xl text-gray-500" />}
                  className="w-full"
                />
              </div>
              <Button
                onClick={onOpen}
                isIconOnly
                size="lg"
                radius="md"
                variant="shadow"
                className="dark:shadow-sm"
              >
                <RiDeleteBinLine className="text-xl text-red" />
              </Button>
            </div>
          </div>
        </div>
        <VendorProductTable />
      </div>
      <DeleteVendorProductModal isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose} />
    </div>
  );
}

export default VendorProducts;
