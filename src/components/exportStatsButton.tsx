import React from "react";
import { Popover, PopoverTrigger, PopoverContent, Button, Divider } from "@nextui-org/react";
import { LuDownload } from "react-icons/lu";
import { FaFilePdf } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";

function ExportStatsButton(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <Popover placement="bottom-end" isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <PopoverTrigger>
        <Button
          color="primary"
          radius="sm"
          className="font-semibold text-sm"
          startContent={<LuDownload className="text-xl" />}
        >
          Export Stats
        </Button>
      </PopoverTrigger>
      <PopoverContent className="rounded-none mt-1 p-0">
        <div>
          <div className="flex items-center gap-2 py-3 pl-3 pr-24 cursor-pointer">
            <FaFilePdf className="text-red text-small" />
            <p className="text-sm font-medium">Export as Pdf</p>
          </div>
          <Divider orientation="horizontal" />
          <div className="flex items-center gap-2 py-3 pl-3 pr-24 cursor-pointer">
            <RiFileExcel2Fill className="text-green text-small" />
            <p className="text-sm font-medium">Export as Excel</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ExportStatsButton;
