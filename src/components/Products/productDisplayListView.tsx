import { products } from "@/pages/Products/utils";
import ProductCardListView from "./productCardListView";
import UsersTablePagination from "../Users/usersTablePagination";
import { Checkbox, useDisclosure } from "@nextui-org/react";
import ProductDetailsModal from "./productDetailsModal";
import NewProductsModal from "./newProductsModal";

function ProductDisplayListView(): JSX.Element {
  const productDetailsModal = useDisclosure();
  const newProductsModal = useDisclosure();

  return (
    <div className="w-full mt-4">
      <div className="absolute top-3 flex gap-6 items-center">
        <Checkbox size="sm">Select all</Checkbox>
        <div
          onClick={newProductsModal.onOpen}
          className="text-secondary text-sm font-medium cursor-pointer"
        >
          New products (2)
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {products.map((item, index) => (
          <ProductCardListView
            key={index}
            amount={item.amount}
            id={item.id}
            image={item.image}
            productName={item.productName}
            vendorName={item.vendorName}
            vendorProfilePicture={item.vendorProfilePicture}
            openModal={productDetailsModal.onOpen}
          />
        ))}
      </div>
      <div className="w-full my-4">
        <UsersTablePagination />
      </div>
      <ProductDetailsModal
        isOpen={productDetailsModal.isOpen}
        onClose={productDetailsModal.onClose}
        onOpenChange={productDetailsModal.onOpenChange}
      />
      <NewProductsModal
        isOpen={newProductsModal.isOpen}
        onClose={newProductsModal.onClose}
        onOpenChange={newProductsModal.onOpenChange}
      />
    </div>
  );
}

export default ProductDisplayListView;
