import { cartItemsTableData } from "@/pages/Users/utils";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Image,
} from "@nextui-org/react";
import { FiShoppingBag } from "react-icons/fi";

function CartItems(): JSX.Element {
  return (
    <div className="w-full mt-2 md:mt-4 lg:mt-8 border dark:border-dark py-6 rounded-md">
      <div className="flex items-center justify-between mb-5 lg:px-6">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium">Cart Items</h3>
            <div className="text-xs font-medium text-primary px-2 py-1 bg-slate-200 dark:bg-dark rounded-full">
              12 Items
            </div>
          </div>
          <div className="pt-1">
            <p className="text-base text-gray-500 dark:text-white">See active purchase</p>
          </div>
        </div>
        <div>
          <p className="text-lg font-medium">Total: $4,000</p>
        </div>
      </div>
      <div className="overflow-x-auto overflow-y-hidden">
        <Table
          radius="none"
          removeWrapper
          aria-label="Cart Items table"
          bottomContent={
            <div className="flex w-full justify-between items-center px-4 py-3">
              <div className="flex items-center gap-4">
                <h1 className="font-medium text-lg">Summary:</h1>
                <p className="font-medium text-sm text-gray-500 dark:text-white">
                  Delivery price: $200
                </p>
                <p className="font-medium text-sm text-gray-500 dark:text-white">
                  Total cart: 3,800
                </p>
              </div>
              <div>
                <h1 className="font-medium text-lg">Total: $4,000</h1>
              </div>
            </div>
          }
          classNames={{
            th: "bg-lightest font-normal text-dark dark:bg-dark text-xs dark:text-white px-5 py-3",
            td: "border-b-1 dark:border-dark h-16 px-5 text-gray-600 dark:text-white text-xs",
            thead: "table-header",
          }}
        >
          <TableHeader>
            <TableColumn>
              <div className="flex gap-2 items-center">
                <FiShoppingBag className="text-xl" />
                <p>Product name</p>
              </div>
            </TableColumn>
            <TableColumn>Vendor name</TableColumn>
            <TableColumn>Added on</TableColumn>
            <TableColumn>Quantity</TableColumn>
            <TableColumn>Price</TableColumn>
          </TableHeader>
          <TableBody>
            {cartItemsTableData.map((data, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex gap-3 items-center">
                      <div>
                        <Image
                          width={40}
                          height={40}
                          radius="md"
                          alt={data.productName}
                          src={data.productImage}
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-black dark:text-white">
                          {data.productName}
                        </h3>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{data.vendorName}</TableCell>
                  <TableCell>{data.addedOn}</TableCell>
                  <TableCell>{data.quantity}</TableCell>
                  <TableCell>{data.price}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default CartItems;
