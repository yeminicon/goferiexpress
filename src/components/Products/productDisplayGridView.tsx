import { products } from "@/pages/Products/utils";
import ProductCardGridView from "./productCardGridView";
import UsersTablePagination from "../Users/usersTablePagination";
import { Checkbox, useDisclosure } from "@nextui-org/react";
import ProductDetailsModal from "./productDetailsModal";
import NewProductsModal from "./newProductsModal";
import UpdateProductModal from "./updateProductModal";
import SpecialOfferModal from "./specialOfferModal";

function ProductDisplayGridView(): JSX.Element {
  const productDetailsModal = useDisclosure();
  const newProductsModal = useDisclosure();
  const updateProductsModal = useDisclosure();
  const specialOfferModal = useDisclosure();

  return (
    <div className="w-full mt-4">
      <div className="absolute top-3 flex gap-6 items-center">
        <Checkbox size="sm">Select all</Checkbox>
        <div className="text-secondary flex gap-6 text-sm font-medium">
          <div onClick={newProductsModal.onOpen} className="cursor-pointer">
            New products (2)
          </div>
          <div onClick={updateProductsModal.onOpen} className="cursor-pointer">
            Updated products
          </div>
          <div onClick={specialOfferModal.onOpen} className="cursor-pointer">
            Special Offers
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {products.map((item, index) => (
          <ProductCardGridView
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
      <UpdateProductModal
        isOpen={updateProductsModal.isOpen}
        onClose={updateProductsModal.onClose}
        onOpenChange={updateProductsModal.onOpenChange}
      />
      <SpecialOfferModal
        isOpen={specialOfferModal.isOpen}
        onClose={specialOfferModal.onClose}
        onOpenChange={specialOfferModal.onOpenChange}
      />
    </div>
  );
}

export default ProductDisplayGridView;
