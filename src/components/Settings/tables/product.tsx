import { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Image,
} from "@nextui-org/react";
import { IoDiamondOutline } from "react-icons/io5";
import { FiShoppingBag, FiStar } from "react-icons/fi";
import { RxCube } from "react-icons/rx";
import { AdvancedTableBottomContent } from "../AdvancedTableBottomContent";

export const ProductTable = () => {
  return (
    <Table removeWrapper color="default" selectionMode="multiple" aria-label="Products table">
      <TableHeader>
        <TableColumn className="flex gap-2 items-center">
          <div className="flex gap-2 items-center">
            <FiShoppingBag className="text-xl" />
            <p>Product name</p>
          </div>
        </TableColumn>
        <TableColumn>Non-VIP current markup</TableColumn>
        <TableColumn>
          <div className="flex items-center space-x-1 rounded-full bg-lightest px-1 text-xs text-caution w-fit">
            <FiStar /> <span>Gold current markup</span>
          </div>
        </TableColumn>
        <TableColumn>
          <div className="flex items-center space-x-1 rounded-full bg-lightest px-1 text-xs text-primary w-fit">
            <IoDiamondOutline /> <span>Diamond current markup</span>
          </div>
        </TableColumn>
        <TableColumn>All default markups</TableColumn>
      </TableHeader>
      <TableBody>
        {[1, 2, 3, 4, 5, 4, 6, 6].map((_, i) => {
          return (
            <TableRow key={i}>
              <TableCell className="text-xs">
                <div className="flex items-center space-x-2">
                  <Image
                    width={40}
                    height={40}
                    radius="md"
                    alt=""
                    src="https://srv.carbonads.net/static/30242/5553640155979510763aebb62751652e628b00e1"
                  />
                  <span className="text-xs">Tony Reichert</span>
                </div>
              </TableCell>
              <TableCell className="text-xs">0%</TableCell>
              <TableCell className="text-xs">0%</TableCell>
              <TableCell className="text-xs">0%</TableCell>
              <TableCell className="text-xs">
                10% - <span className="text-caution"> 0%</span> - 0%
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export const CategoryProductsTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <Table
      removeWrapper
      color="default"
      aria-label="Advanced markup percentage settings"
      selectionMode="multiple"
      bottomContent={
        <AdvancedTableBottomContent
          currentPage={currentPage}
          rowsPerPage={5}
          setCurrentPage={setCurrentPage}
          totalItems={10}
        />
      }
    >
      <TableHeader>
        <TableColumn className="flex gap-2 items-center">
          <div className="flex gap-2 items-center">
            <RxCube className="text-xl" />
            <span>Product name</span>
          </div>
        </TableColumn>
        <TableColumn>Cost Price</TableColumn>
        <TableColumn>Profit Margins (%)</TableColumn>
        <TableColumn>Discounts (%)</TableColumn>
        <TableColumn>Selling price</TableColumn>
      </TableHeader>
      <TableBody>
        {[1, 2, 3, 4, 4, 5, 5].map((_, i) => (
          <TableRow key={i}>
            <TableCell>
              <div className="flex items-center space-x-2">
                <Image
                  width={40}
                  height={40}
                  radius="md"
                  alt=""
                  src="https://srv.carbonads.net/static/30242/5553640155979510763aebb62751652e628b00e1"
                />
                <span className="text-xs font-medium">Big Vendor</span>
              </div>
            </TableCell>
            <TableCell className="text-xs">$100</TableCell>
            <TableCell className="text-xs">10%</TableCell>
            <TableCell className="text-xs">None</TableCell>
            <TableCell className="text-xs">$100</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
