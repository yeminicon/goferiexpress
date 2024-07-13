import { ProductsProps } from "@/pages/Products/products.interface";
import { Image, Checkbox, Switch, Avatar } from "@nextui-org/react";

function ProductCardGridView({
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
      className="w-full h-[300px] overflow-hidden rounded-xl shadow dark:bg-dark relative cursor-pointer"
    >
      <div className="h-[200px]">
        <Image
          width="100%"
          height="100%"
          radius="none"
          alt={productName}
          src={image}
          className="h-[200px] w-full object-cover"
        />
      </div>
      <div className="flex absolute z-10 top-1 justify-between items-center w-full px-2 py-1">
        <div className="bg-slate-100 dark:bg-dark px-2 py-1 rounded-md text-sm font-medium text-dark dark:text-white">
          Gift set
        </div>
        <Checkbox radius="sm" />
      </div>
      <div className="px-2 py-1">
        <div className="w-full flex justify-between items-center text-sm font-medium">
          <p className="text-primary">{productName}</p>
          <p>${amount}</p>
        </div>
        <div className="max-w-40 h-6 bg-slate-50 rounded-3xl px-3 py-1 text-xs font-medium my-2 text-dark">
          Product code: {id}
        </div>
        <div className="w-full flex justify-between items-center text-sm font-medium pt-1">
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

export default ProductCardGridView;
