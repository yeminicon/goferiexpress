import { ProductsProps } from "@/pages/Products/products.interface";
import { Avatar, Checkbox, Image, Switch } from "@nextui-org/react";

function ProductCardListView({
  id,
  amount,
  image,
  productName,
  vendorName,
  vendorProfilePicture,
  openModal,
}: ProductsProps): JSX.Element {
  return (
    <div
      onClick={openModal}
      className="w-full h-[140px] overflow-hidden rounded-xl shadow dark:bg-dark relative cursor-pointer flex items-center gap-1"
    >
      <div className="absolute z-10 left-2 top-2 flex-col items-start">
        <Checkbox radius="sm" />
      </div>
      <div className="w-[38%] z-0">
        <Image
          width="100%"
          height="100%"
          radius="none"
          alt={productName}
          src={image}
          className="h-[140px] w-full object-cover"
        />
      </div>
      <div className="w-[60%] px-2 py:2 lg:py-3">
        <h1 className="text-lg font-medium text-primary">{productName}</h1>
        <p className="text-lg font-medium text-gray-800 dark:text-white mt-1">${amount}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="text-secondary text-xs">Gift set</p>
          <div className="bg-slate-50 rounded-3xl px-2 py-1 text-xs font-medium text-gray-800">
            Product code: {id}
          </div>
        </div>
        <div className="w-full flex justify-between items-center text-sm font-medium mt-2">
          <div className="flex items-center gap-2">
            <Avatar src={vendorProfilePicture} className="w-6 h-6 text-tiny" />
            <p className="text-xs">{vendorName}</p>
          </div>
          <Switch defaultSelected size="sm" />
        </div>
      </div>
    </div>
  );
}

export default ProductCardListView;
