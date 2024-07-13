import { Checkbox, Button } from "@nextui-org/react";
import ProductCard from "./productCard";
import ProductsVendorsDropdown from "./productsVendorsDropdown";

function DeclinedProductsPageContent(): JSX.Element {
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
      <div className="mt-6 text-lg px-3 py-3 border-l-5 border-yellow-600 bg-secondary text-white rounded-r-xl">
        <span className="text-xl font-semibold">Warning</span> : Products here would be
        automatically deleted after 30days
      </div>
      <div className="mt-2">
        <div className="w-full bg-slate-50 border-b font-medium text-sm text-dark px-4 py-2">
          Today
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

export default DeclinedProductsPageContent;
