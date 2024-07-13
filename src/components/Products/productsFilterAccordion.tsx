import { FaArrowRotateLeft } from "react-icons/fa6";
import { Accordion, AccordionItem, Button, Switch } from "@nextui-org/react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineArrowForwardIos } from "react-icons/md";
import { accordionItems } from "@/pages/Products/utils";

const itemClasses = {
  base: "py-0 w-full",
  title: "font-normal text-sm",
  indicator: "text-semi-bold",
  content: "text-small",
};

function ProductsFilterAccordion(): JSX.Element {
  return (
    <div>
      <div className="flex items-center justify-between px-2 py-3 bg-primary">
        <div className="text-white text-xl font-semibold">Filter</div>
        <div className="flex items-center gap-1 text-white cursor-pointer">
          <FaArrowRotateLeft />
          <div className="text-xs font-medium">Reset</div>
        </div>
      </div>
      <div className="px-1 py-2">
        <Accordion isCompact showDivider={false} itemClasses={itemClasses}>
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              indicator={({ isOpen }) => (isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />)}
              aria-label={item.title}
              title={item.title}
            >
              <div className="flex items-center gap-6">
                <div className="border-b-1 border-success-500 text-success-500 cursor-pointer">
                  Include
                </div>
                <div className="border-b-1 border-red text-red cursor-pointer">Exclude</div>
                <div className="border-b-1 border-black cursor-pointer">Deselect</div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="px-2 py-3 bg-primary mt-4">
        <h1 className="text-white text-xl font-semibold">Actions</h1>
      </div>
      <div className="px-2 py-2">
        <div className="flex justify-between items-center py-2">
          <p className="text-sm">Buy Now Candidate ?</p>
          <Switch size="sm" />
        </div>
        <div className="flex justify-between items-center py-2">
          <p className="text-sm">Enable Visibility ?</p>
          <Switch size="sm" />
        </div>
      </div>
      <div className="px-2 py-3 bg-slate-50 mt-4">
        <h1 className="text-primary text-lg font-semibold">Discount</h1>
      </div>
      <div className="px-2 py-4">
        <h1 className="text-base">Large Order discounts</h1>
        <div className="flex items-center justify-between bg-slate-100 dark:bg-primary py-3 px-3 rounded-lg mt-2 cursor-pointer">
          <h1 className="text-base">Apply Order Discount</h1>
          <MdOutlineArrowForwardIos />
        </div>
        <div className="mt-8 mb-2">
          <Button isDisabled fullWidth size="lg" radius="sm" color="success" className="text-white">
            Publish Changes
          </Button>
        </div>
        <p className="text-xs text-gray-500 dark:text-white">Click to apply changes</p>
      </div>
    </div>
  );
}

export default ProductsFilterAccordion;
