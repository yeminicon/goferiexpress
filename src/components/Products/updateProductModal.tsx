import { CustomModalProps } from "@/pages/Users/users.interface";
import { Modal, ModalContent, ModalBody, Input } from "@nextui-org/react";
import ProductCard from "./productCard";
import ProductsVendorsDropdown from "./productsVendorsDropdown";
import FilterByDateInput from "../filterByDateInput";
import ProductsCategoriesDropdown from "./productsCategoriesDropdown";
import ProductsSubCategoriesDropdown from "./productsSubCategoriesDropdown";
import { FiSearch } from "react-icons/fi";

function UpdateProductModal({ isOpen, onOpenChange }: CustomModalProps): JSX.Element {
  return (
    <Modal size="5xl" hideCloseButton isOpen={isOpen} onOpenChange={onOpenChange} className="pt-8">
      <ModalContent>
        <ModalBody>
          <div className="h-[48rem] overflow-y-auto overflow-x-hidden">
            <div className="flex items-center justify-between">
              <h1 className="text-xl text-dark dark:text-white font-semibold">Updated Products</h1>
              <div className="md:w-72 flex gap-5 items-center">
                <Input
                  type="text"
                  placeholder="Search by Name, Tags"
                  size="sm"
                  fullWidth={true}
                  radius="sm"
                  variant="bordered"
                  startContent={<FiSearch className="text-xl text-gray-400" />}
                  className="w-full"
                />
              </div>
            </div>
            <div className="mt-7">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ProductsVendorsDropdown />
                  <ProductsCategoriesDropdown />
                  <ProductsSubCategoriesDropdown />
                </div>
                <FilterByDateInput />
              </div>
              <div className="px-4 text-secondary text-sm mt-6">
                Products here would be automatically deleted after 30days
              </div>
              <div className="mt-2">
                <div className="w-full bg-slate-50 dark:bg-slate-50 border-b font-medium text-sm text-dark px-4 py-2">
                  Today
                </div>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <ProductCard key={index} />
                  ))}
                </div>
              </div>
              <div className="mt-10">
                <div className="w-full bg-slate-50 border-b font-medium text-sm text-dark px-4 py-2">
                  27th Nov
                </div>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <ProductCard key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default UpdateProductModal;
