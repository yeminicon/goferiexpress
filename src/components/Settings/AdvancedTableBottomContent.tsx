import { Pagination, Button } from "@nextui-org/react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

type AdvancedTableBottomContentT = {
  currentPage: number;
  totalItems: number;
  rowsPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export function AdvancedTableBottomContent({
  currentPage,
  totalItems,
  setCurrentPage,
  rowsPerPage,
}: AdvancedTableBottomContentT) {
  return (
    <div className="flex items-center justify-between w-full px-4">
      <Button
        radius="sm"
        variant="bordered"
        className="font-semibold text-sm text-default-500"
        startContent={<MdArrowBack className="text-xl" />}
        disabled={currentPage === 1} // Disable if already on the first page
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </Button>
      <Pagination
        radius="sm"
        classNames={{
          wrapper: "gap-0 overflow-visible h-8 rounded",
          item: "w-8 h-8 text-small rounded-none bg-transparent",
          cursor: "bg-light shadow-lg text-black",
        }}
        page={currentPage}
        total={totalItems}
        variant="light"
        onChange={setCurrentPage}
      />
      <Button
        radius="sm"
        variant="bordered"
        className="font-semibold text-sm text-default-500"
        endContent={<MdArrowForward className="text-xl" />}
        disabled={currentPage === Math.ceil(totalItems / rowsPerPage)}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
}
