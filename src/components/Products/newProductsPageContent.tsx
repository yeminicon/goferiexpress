import { Button, Checkbox } from "@nextui-org/react";
import ProductsVendorsDropdown from "./productsVendorsDropdown";
import ProductCard from "./productCard";

function NewProductsPageContent(): JSX.Element {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <ProductsVendorsDropdown />
        <div className="flex items-center gap-8">
          <Checkbox size="sm" radius="sm">
            Select all
          </Checkbox>
          <Button color="primary" radius="sm" className="px-7">
            Approve all
          </Button>
        </div>
      </div>
      <div className="mt-6">
        <div className="w-full bg-slate-50 border-b font-medium text-sm text-dark px-4 py-2">
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
  );
}

export default NewProductsPageContent;
