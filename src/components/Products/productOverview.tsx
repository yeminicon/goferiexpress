import YellowBag from "@/assets/images/yellow-bag.png";
import { productDetailsTableData } from "@/pages/Products/utils";
import {
  Image,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiClock } from "react-icons/fi";

function ProductOverview(): JSX.Element {
  return (
    <div className="mt-1 w-full pr-[10%] lg:mt-2">
      <div className="flex items-center gap-7">
        <div>
          <Image src={YellowBag} alt="yellow bag" width={345} height={345} radius="sm" />
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-3xl text-gray-800 dark:text-white">Yellow bag</h1>
            <div className="flex items-center gap-2 text-primary bg-slate-50 dark:bg-dark text-xs px-2 py-1 rounded-2xl">
              <p>offer expiry</p>
              <AiOutlineInfoCircle />
            </div>
          </div>
          <div>
            <h3 className="my-3 text-xl font-semibold text-gray-800 dark:text-white">$100.89</h3>
            <p className="text-sm text-gray-600 dark:text-white">Product code: #12345789</p>
            <div className="flex items-center gap-3 mt-3">
              <div className="w-5 h-5 rounded-full bg-[#FBB102]"></div>
              <div className="w-5 h-5 rounded-full bg-[#FF5722]"></div>
              <div className="w-5 h-5 rounded-full bg-[#313C59]"></div>
              <div className="w-5 h-5 rounded-full bg-[#BC8E04]"></div>
              <div className="w-5 h-5 rounded-full bg-[#4AA84E]"></div>
            </div>
            <div className="flex items-center gap-2 my-2 text-sm font text-gray-600 dark:text-white">
              <div>Vendor: Big vendor</div>
              <div className="w-1 h-1 rounded-full bg-black"></div>
              <div>Category: Bags</div>
              <div className="w-1 h-1 rounded-full bg-black"></div>
              <div>Sub Category: Bags</div>
            </div>
            <div className="my-2 text-sm font text-gray-600 dark:text-white">
              Minimum order quantity: 100
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <p className="text-sm">Visibility switch:</p>
                <Switch defaultSelected size="sm" />
              </div>
              <p className="text-primary text-sm">2 Comments</p>
              <div className="flex items-center gap-1">
                <FiClock className="text-primary" />
                <p className="text-sm text-gray-600 dark:text-white">Lead Time: 2 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-start gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Image
            key={index}
            src={YellowBag}
            alt="yellow bag"
            width={112}
            height={112}
            radius="sm"
          />
        ))}
      </div>
      <div className="mt-3 w-full bg-slate-100 dark:bg-gray-700 rounded py-3 px-4">
        <p className="text-sm font-medium">Extra Links:</p>
        <div className="flex flex-wrap gap-4 mt-3 items-center">
          <p className="text-sm font-medium">
            Sizing chart link:
            <span className="text-primary underline">szptry.clothing.sizing</span>
          </p>
          <div className="w-1 h-1 rounded-full bg-black dark:bg-white"></div>
          <p className="text-sm font-medium">
            Line art link
            <span className="text-primary underline">artwork.clothing.photos</span>
          </p>
          <div className="w-1 h-1 rounded-full bg-black dark:bg-white"></div>
          <p className="text-sm font-medium">
            Supplier product link:
            <span className="text-primary underline">artwork.clothing.photos</span>
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-xl font-semibold">Product Description</h1>
        <div className="mt-4 mb-6 text-sm">
          <p>Introducing our stylish Yellow Bag:</p>
          <div className="my-5">
            <p>
              Add a pop of vibrant color to your accessory collection with our Yellow Bag. This
              eye-catching bag is designed to not only elevate your fashion game but also provide
              practical functionality.
            </p>
          </div>
          <p>Key features:</p>
          <p>
            1. Striking Yellow Hue: The bag's bright and cheerful yellow color instantly grabs
            attention and complements a variety of outfits.
          </p>
          <div className="my-5">
            <p>
              2. Spacious Interior: With ample room inside, this bag is perfect for carrying your
              daily essentials, whether it's your wallet, phone, keys, or makeup.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Table
          radius="none"
          removeWrapper
          aria-label="Products overview table"
          classNames={{
            th: "dark:bg-dark text-xs text-black dark:text-white",
            td: "border-b-1 dark:border-dark h-16 text-gray-600 dark:text-white",
          }}
        >
          <TableHeader>
            <TableColumn>
              <div className="flex items-center gap-2">
                <h1>Colors -</h1>
                <h1 className="text-primary">(Hex code)</h1>
              </div>
            </TableColumn>
            <TableColumn>In stock</TableColumn>
            <TableColumn>Next shipment</TableColumn>
          </TableHeader>
          <TableBody>
            {productDetailsTableData.map((data, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: data.hexCode }}
                    ></div>
                    <div>
                      <h3 className="text-sm font-medium">
                        {data.color} - ({data.hexCode})
                      </h3>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{data.inStock}</TableCell>
                <TableCell>{data.nextShipment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default ProductOverview;
