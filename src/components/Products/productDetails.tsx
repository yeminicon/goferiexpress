import { productBasicInfoDetails, productMoreInfoDetails } from "@/pages/Products/utils";

function ProductDetails(): JSX.Element {
  return (
    <div className="mt-2 lg:w-[70%] lg:mt-4">
      <h3 className="font-medium text-lg">Basic Product Details</h3>
      <p className="text-sm mt-2 text-gray-500 dark:text-white font-medium">
        A basic info about this product
      </p>
      <div className="flex flex-col md:flex-row w-full gap-6 flex-wrap mt-8">
        {productBasicInfoDetails.map((data, index) => (
          <div key={index} className="w-full lg:w-[45%]">
            <p className="text-sm">{data.label}</p>
            <div className="p-3 border dark:border-dark rounded-lg mt-1 text-sm">{data.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-2 lg:mt-12">
        <h3 className="font-medium text-lg">More Details</h3>
        <p className="text-sm mt-2 text-gray-500 dark:text-white font-medium">
          A more comprehensive overview of this product
        </p>
        <div className="flex flex-col md:flex-row w-full gap-6 flex-wrap mt-8">
          {productMoreInfoDetails.map((data, index) => (
            <div key={index} className="w-full lg:w-[45%]">
              <p className="text-sm">{data.label}</p>
              <div className="p-3 border dark:border-dark rounded-lg mt-1 text-sm">
                {data.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
