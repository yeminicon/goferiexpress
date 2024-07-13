import YellowBag from "@/assets/images/yellow-bag.png";
import { Image } from "@nextui-org/react";

function ProductsImagesDisplay(): JSX.Element {
  return (
    <div className="mt-2 lg:mt-3">
      <h1 className="font-bold text-xl">Product Images</h1>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Image
            key={index}
            src={YellowBag}
            alt="yellow bag"
            width={180}
            height={180}
            radius="sm"
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsImagesDisplay;
