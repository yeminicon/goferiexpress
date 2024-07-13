import { ProductAUPricingTableData } from "@/pages/Products/utils";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

function ProductAUPricing(): JSX.Element {
  return (
    <div className="mt-4">
      <div className="bg-secondary text-white rounded-r-lg px-3 py-3 w-full border-l-8 border-yellow-600">
        Warning: Pricing shown here are in AUD
      </div>
      <div className="mt-3">
        <Table
          radius="none"
          removeWrapper
          aria-label="Products pricing table"
          classNames={{
            th: "dark:bg-dark text-xs text-black dark:text-white",
            td: "text-sm border-b-1 dark:border-dark h-16 text-gray-600 dark:text-white",
          }}
        >
          <TableHeader>
            <TableColumn>
              <span className="text-primary">Variations</span> | Quantity
            </TableColumn>
            <TableColumn>50</TableColumn>
            <TableColumn>100</TableColumn>
            <TableColumn>250</TableColumn>
            <TableColumn>500</TableColumn>
            <TableColumn>1000</TableColumn>
            <TableColumn>2500</TableColumn>
            <TableColumn>5000</TableColumn>
            <TableColumn>Updated At</TableColumn>
          </TableHeader>
          <TableBody>
            {ProductAUPricingTableData.map((data, index) => (
              <TableRow key={index}>
                <TableCell className="text-primary dark:text-primary">{data.quantity}</TableCell>
                <TableCell>{data[100]}</TableCell>
                <TableCell>{data[250]}</TableCell>
                <TableCell>{data[50]}</TableCell>
                <TableCell>{data[500]}</TableCell>
                <TableCell>{data[1000]}</TableCell>
                <TableCell>{data[2500]}</TableCell>
                <TableCell>{data[5000]}</TableCell>
                <TableCell>{data.updatedAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default ProductAUPricing;
