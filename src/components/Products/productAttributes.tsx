import { productAttributeTableData } from "@/pages/Products/utils";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Divider,
} from "@nextui-org/react";

function ProductAttributes(): JSX.Element {
  return (
    <div className="mt-2">
      <Table
        radius="none"
        removeWrapper
        aria-label="Products attributes table"
        classNames={{
          th: "dark:bg-dark text-xs text-black dark:text-white",
          td: "border-b-1 dark:border-dark h-16 text-gray-600 dark:text-white",
        }}
      >
        <TableHeader>
          <TableColumn>Product Attribute</TableColumn>
          <TableColumn>Details</TableColumn>
        </TableHeader>
        <TableBody>
          {productAttributeTableData.map((data, index) => (
            <TableRow key={index}>
              <TableCell>{data.productAttribute}</TableCell>
              <TableCell>
                {index === productAttributeTableData.length - 1 ? (
                  <div className="flex items-center gap-3">
                    {Array.isArray(data.details) ? (
                      data.details.map((attr, index) => (
                        <div key={index} className="bg-light max-w-max rounded-xl">
                          <h1 className="text-base font-bold text-gray-500 dark:text-dark flex justify-center py-1">
                            {attr.attribute}
                          </h1>
                          <Divider orientation="horizontal" />
                          <div className="px-3 py-2 flex items-center gap-3">
                            {attr.spec.map((data, index) => (
                              <div
                                key={index}
                                className="w-full bg-medium dark:bg-dark text-white px-3 py-2 text-sm rounded-xl flex justify-center"
                              >
                                {data.title}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div>{data.details}</div>
                    )}
                  </div>
                ) : (
                  <div>{data.details as string}</div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ProductAttributes;
