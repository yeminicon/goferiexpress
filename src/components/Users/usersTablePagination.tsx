import { Pagination, Button } from "@nextui-org/react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";

function UsersTablePagination(): JSX.Element {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-6">
        <Button
          radius="sm"
          variant="bordered"
          className="font-semibold text-sm"
          startContent={<MdArrowBack className="text-xl" />}
        >
          Previous
        </Button>
        <Button
          radius="sm"
          variant="bordered"
          className="font-semibold text-sm"
          endContent={<IoIosArrowUp className="text-xl" />}
        >
          15
        </Button>
      </div>
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

export default UsersTablePagination;
