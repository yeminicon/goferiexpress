import React from "react";
import { productDetailsTableData } from "@/pages/Products/utils";
import { Popover, PopoverTrigger, PopoverContent, Checkbox, Input } from "@nextui-org/react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

function ProductsColorsDropdown(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <Popover placement="bottom-end" isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <PopoverTrigger>
        <div className="px-5 py-3 border dark:border-dark rounded-lg flex gap-4 items-center cursor-pointer">
          <p className="text-sm">Colors</p>
          <MdKeyboardArrowDown />
        </div>
      </PopoverTrigger>
      <PopoverContent className="rounded-md mt-1 p-0">
        <div className="w-full flex justify-between items-center px-3 mt-3">
          <h3 className="text-sm text-primary">All Colors</h3>
          <div className="flex gap-3 items-center">
            <div>
              <Input
                type="text"
                placeholder="Search Color Name"
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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 px-3 py-4">
          {productDetailsTableData.map((item, index) => (
            <div key={index} className="w-32 rounded-md border  dark:border-dark px-3 py-4">
              <Checkbox>
                <div className="flex items-center gap-2 pl-1">
                  <div className={`w-5 h-5 rounded-full bg-[${item.hexCode}]`}></div>
                  <div>
                    <h3 className="text-sm font-medium">{item.color}</h3>
                  </div>
                </div>
              </Checkbox>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ProductsColorsDropdown;
