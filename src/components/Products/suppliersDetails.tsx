import { suppliersDetailsTableData } from "@/pages/Products/utils";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

function SuppliersDetails(): JSX.Element {
  return (
    <div className="mt-2">
      <div className="my-2 bg-slate-50 dark:bg-gray-700 text-sm rounded-md border-l-8 border-primary w-full p-3">
        <p className="text-primary">Suppliers Note:</p>
        <p className="my-1">Date: [Date of Delivery]</p>
        <p className="my-1">
          Supplier Name: [Supplier's Name] Supplier Contact: [Supplier's Contact Information]
          Supplier Address: [Supplier's Address]
        </p>
        <div className="pl-2 flex gap-1 items-center">
          <div className="w-1 h-1 rounded-full bg-black dark:bg-white"></div>
          <p>Product Delivered:</p>
        </div>
        <div className="pl-4 my-1">
          <p>a. [Product Name 1]</p>
          <p>b. [Product Name 2]</p>
          <p>c. [Product Name 3]</p>
        </div>
      </div>
      <Table
        radius="none"
        removeWrapper
        aria-label="Suppliers details table"
        classNames={{
          th: "dark:bg-dark text-xs text-black dark:text-white",
          td: "border-b-1 dark:border-dark h-16 text-gray-600 dark:text-white",
        }}
      >
        <TableHeader>
          <TableColumn>Supply Specification</TableColumn>
          <TableColumn>Details</TableColumn>
        </TableHeader>
        <TableBody>
          {suppliersDetailsTableData.map((data, index) => (
            <TableRow key={index}>
              <TableCell>{data.supplySpecification}</TableCell>
              <TableCell>{data.details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default SuppliersDetails;
