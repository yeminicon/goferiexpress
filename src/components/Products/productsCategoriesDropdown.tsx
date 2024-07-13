import React from "react";
import { allProductsSubCategories } from "@/pages/Products/utils";
import { Popover, PopoverTrigger, PopoverContent, Input, Checkbox } from "@nextui-org/react";
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function ProductsCategoriesDropdown(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <Popover placement="bottom" isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <PopoverTrigger>
        <div className="px-5 py-3 border dark:border-dark rounded-lg flex gap-4 items-center cursor-pointer">
          <p className="text-sm">Categories</p>
          <MdKeyboardArrowDown />
        </div>
      </PopoverTrigger>
      <PopoverContent className="rounded-md mt-1 p-0">
        <div className="w-full flex justify-between items-center px-3 mt-3">
          <h3 className="text-sm text-primary">All Categories</h3>
          <div className="flex gap-3 items-center">
            <div>
              <Input
                type="text"
                placeholder="Search Categories"
                size="sm"
                variant="bordered"
                classNames={{
                  inputWrapper: "py-0 h-8 border-1",
                }}
              />
            </div>
            <div className="flex gap-3">
              <div className="w-5 h-5 border-1 border-gray-400 text-gray-400 flex items-center justify-center rounded-full">
                <MdKeyboardArrowLeft />
              </div>
              <div className="w-5 h-5 border-1 border-primary text-primary cursor-pointer flex items-center justify-center rounded-full">
                <MdKeyboardArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-3 py-3">
          {allProductsSubCategories.map((item, index) => (
            <div key={index} className="rounded-md border  dark:border-dark px-3 py-3">
              <Checkbox>{item.category}</Checkbox>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ProductsCategoriesDropdown;
