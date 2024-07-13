import { Pagination, Button } from "@nextui-org/react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

function TablePagination(): JSX.Element {
  return (
    <div className="flex items-center justify-between w-full">
      <Button
        radius="sm"
        variant="bordered"
        className="font-semibold text-sm"
        startContent={<MdArrowBack className="text-xl" />}
      >
        Previous
      </Button>
      <Pagination total={10} radius="sm" />
      <Button
        radius="sm"
        variant="bordered"
        className="font-semibold text-sm"
        endContent={<MdArrowForward className="text-xl" />}
      >
        Next
      </Button>
    </div>
  );
}

export default TablePagination;
