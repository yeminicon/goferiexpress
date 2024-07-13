import { Checkbox, Avatar, Button, Image } from "@nextui-org/react";
import YellowBag from "@/assets/images/yellow-bag.png";

function ProductCard(): JSX.Element {
  return (
    <div className="w-full h-[272px] overflow-hidden rounded-xl shadow-sm dark:bg-dark relative">
      <div className="h-[120px]">
        <Image
          width="100%"
          height="100%"
          radius="none"
          alt="Product image"
          src={YellowBag}
          className="h-[120px] w-full object-cover"
        />
      </div>
      <div className="absolute z-10 top-1 px-2 py-1">
        <Checkbox radius="sm" />
      </div>
      <div className="px-2 py-1 mt-4">
        <div className="w-full flex justify-between items-center text-lg font-medium text-dark dark:text-white">
          <p>Yellow Bag</p>
          <p>$200.59</p>
        </div>
        <div className="w-full flex justify-between items-center text-sm font-medium pt-3">
          <div className="flex items-center gap-2">
            <Avatar src="https://bit.ly/code-beast" className="w-6 h-6 text-tiny" />
            <p className="text-xs">Big vendor</p>
          </div>
          <div className="text-primary text-xs font-medium">More details</div>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <Button color="primary" radius="sm" fullWidth>
            Approve
          </Button>
          <Button
            color="default"
            variant="light"
            radius="sm"
            fullWidth
            className="shadow-sm dark:text-white"
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
