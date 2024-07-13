import { useMemo, useState } from "react";
import { Button, Card, CardBody, Input, Select, SelectItem } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { SidebarRoutes } from "@/types/routes";
import { CategoryProductsTable, ProductTable } from "@/components/Settings/tables/product";
import { CategoryTable, VendorsTable } from "@/components/Settings/tables/categories";
import ProductsCategoriesDropdown from "@/components/Products/productsCategoriesDropdown";
import ProductsSubCategoriesDropdown from "@/components/Products/productsSubCategoriesDropdown";
import ProductsVendorsDropdown from "@/components/Products/productsVendorsDropdown";
import PageHeader from "@/components/PageHeader";

export type SelectionT = {
  value: string;
  label: string;
};

const dropDownOptions: SelectionT[] = [
  { value: "products", label: "All Products" },
  { value: "categories", label: "All Categories" },
  { value: "allCategoryProducts", label: "All Category products" },
  { value: "vendors", label: "All Vendors" },
  { value: "allVendorProducts", label: "All Vendor products" },
];

export function AdvancedProfit(): JSX.Element {
  const [filterValue, setFilterValue] = useState<SelectionT>({
    value: "products",
    label: "All Products",
  });
  const navigate = useNavigate();

  const handleFilter = (value: SelectionT) => {
    setFilterValue(value);
  };

  const handleBackButton = () => {
    navigate(SidebarRoutes.settings);
  };

  const RenderedTable = useMemo(() => {
    switch (filterValue.value) {
      case "products":
        return <ProductTable />;
      case "allVendorProducts":
        return <CategoryProductsTable />;
      case "allCategoryProducts":
        return <CategoryProductsTable />;
      case "categories":
        return <CategoryTable />;
      case "vendors":
        return <VendorsTable />;
      default:
        return null;
    }
  }, [filterValue.value]);

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button onClick={handleBackButton} isIconOnly className="bg-white shadow-md">
          <MdArrowBack />
        </Button>
        <PageHeader title="Advanced markup" isInnerPage />
      </div>

      <Card>
        <CardBody className="space-y-6">
          <div className="flex items-center justify-between flex-wrap w-full">
            <div className="flex flex-col space-y-2">
              <div className="flex space-x-3 items-center">
                <span className="text-lg text-primary font-medium">
                  Advanced markup percentage settings
                </span>
                <span className="rounded-full bg-light px-2 text-xs text-primary">
                  24,000 Available Items
                </span>
              </div>
              <p className="text-base font-medium text-medium">
                Manage, Monitor, and Organize Your Complete Product Catalog with Ease
              </p>
            </div>
            <div className="hidden sm:block border- w-2/6">
              <form>
                <Input
                  type="text"
                  size="sm"
                  variant="bordered"
                  placeholder="Search by product"
                  startContent={<FiSearch className="pointer-events-none flex-shrink-0" />}
                  className="w-full bg-transparent text-black focus:outline-none dark:text-white"
                />
              </form>
            </div>
          </div>

          <div className="flex justify-between w-full items-center">
            <div className="flex space-x-1 justify-between">
              <Select
                placeholder="All Product"
                size="sm"
                className="w-[200px] text-black  cursor-pointer dark:border-dark rounded-lg"
                defaultSelectedKeys={["products"]}
              >
                {dropDownOptions.map((option) => {
                  return (
                    <SelectItem key={option.value} onClick={() => handleFilter(option)}>
                      {option.label}
                    </SelectItem>
                  );
                })}
              </Select>

              {filterValue.value === "products" && (
                <div className="w-full flex items-center gap-4 flex-wrap">
                  <ProductsVendorsDropdown />
                  <ProductsCategoriesDropdown />
                  <ProductsSubCategoriesDropdown />
                </div>
              )}
            </div>

            <Button color="primary" radius="sm">
              Make Changes
            </Button>
          </div>
          <div>{RenderedTable}</div>
        </CardBody>
      </Card>
    </div>
  );
}
