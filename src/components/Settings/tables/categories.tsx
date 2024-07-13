import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Image,
  Chip,
} from "@nextui-org/react";
import { FiShoppingBag } from "react-icons/fi";
import { RxCube } from "react-icons/rx";
import { AdvancedTableBottomContent } from "../AdvancedTableBottomContent";
import { useState } from "react";

type CategoriesData = {
  id: number;
  Categories: string;
  numberOfItem: number;
  total: number;
};

const dummyData: CategoriesData[] = [
  {
    id: 1,
    Categories: "Made in Australia",
    numberOfItem: 1200,
    total: 1200,
  },
  {
    id: 2,
    Categories: "Gift set",
    numberOfItem: 1200,
    total: 1200,
  },
  {
    id: 3,
    Categories: "Caps and Hats",
    numberOfItem: 1200,
    total: 1200,
  },
  {
    id: 4,
    Categories: "Cups",
    numberOfItem: 1200,
    total: 1200,
  },
  {
    id: 5,
    Categories: "Drinks",
    numberOfItem: 1200,
    total: 1200,
  },
  {
    id: 6,
    Categories: "Ballons",
    numberOfItem: 1200,
    total: 1200,
  },
];

export const CategoryTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <Table
      removeWrapper
      selectionMode="multiple"
      color="default"
      aria-label="Advanced markup percentage settings"
      topContent={null}
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
            <FiShoppingBag className="text-xl" />
            <p>Categories</p>
          </div>
        </TableColumn>
        <TableColumn>Number of Item</TableColumn>
        <TableColumn>Total value of item</TableColumn>
      </TableHeader>
      <TableBody>
        {dummyData.map((data) => (
          <TableRow key={data.id}>
            <TableCell className="text-xs">{data.Categories}</TableCell>
            <TableCell className="text-xs">{data.numberOfItem}</TableCell>
            <TableCell className="text-xs">{data.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export const VendorsTable = () => {
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
            <span>Vendor/ID</span>
          </div>
        </TableColumn>
        <TableColumn>Freight Type</TableColumn>
        <TableColumn>Destination type</TableColumn>
        <TableColumn>Applied Destinations</TableColumn>
      </TableHeader>
      <TableBody>
        {[1, 2, 3, 4, 5].map((_, i) => {
          return (
            <TableRow key={i}>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Image
                    width={40}
                    height={40}
                    radius="md"
                    alt=""
                    src="https://bit.ly/prosper-baba"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs text-darkest dark:text-white font-medium">
                      Big Vendor
                    </span>
                    <span className="text-xs text-medium font-medium">ID: #TJUY768490</span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Chip variant="flat" className="text-xs text-green">
                  Free
                </Chip>
              </TableCell>
              <TableCell>
                <Chip variant="flat" className="text-xs text-primary">
                  Metropolitan{" "}
                </Chip>
              </TableCell>
              <TableCell className="flex gap-2 flex-wrap">
                {[1, 2, 3, 4].map((_, i) => (
                  <Chip variant="flat" className="text-xs" key={i}>
                    12480873
                  </Chip>
                ))}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
