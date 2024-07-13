import React from "react";
import { Popover, PopoverTrigger, PopoverContent, Divider, useDisclosure } from "@nextui-org/react";
import { IoEllipsisVertical } from "react-icons/io5";
import { Link } from "react-router-dom";
import { SidebarRoutes } from "@/types/routes";
import DeleteAllVendorsModal from "./deleteAllVendorsModal";
import DeleteVendorModal from "./deleteVendorModal";

function UserMenuActionButton(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const deleteAllVendorsModal = useDisclosure();
  const deleteVendorModal = useDisclosure();

  const openDeleteAllVendorsModal = (): void => {
    setIsOpen(false);
    deleteAllVendorsModal.onOpen();
  };

  const openDeleteVendorModal = (): void => {
    setIsOpen(false);
    deleteVendorModal.onOpen();
  };

  return (
    <div>
      <Popover placement="bottom-end" isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <PopoverTrigger>
          <div>
            <IoEllipsisVertical className="text-xl cursor-pointer" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="rounded-none mt-1 p-0">
          <div>
            <Link to={SidebarRoutes.vendorDetails}>
              <div className="py-3 pl-3 pr-14 cursor-pointer">
                <p className="text-sm font-medium">Vendor profile</p>
              </div>
            </Link>
            <Divider orientation="horizontal" />
            <div onClick={openDeleteAllVendorsModal} className="py-3 pl-3 pr-14 cursor-pointer">
              <p className="text-sm font-medium">Delete all vendor product</p>
            </div>
            <Divider orientation="horizontal" />
            <div onClick={openDeleteVendorModal} className="py-3 pl-3 pr-14 cursor-pointer">
              <p className="text-sm font-medium">Delete vendor</p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <DeleteAllVendorsModal
        isOpen={deleteAllVendorsModal.isOpen}
        onOpenChange={deleteAllVendorsModal.onOpenChange}
        onClose={deleteAllVendorsModal.onClose}
      />
      <DeleteVendorModal
        isOpen={deleteVendorModal.isOpen}
        onOpenChange={deleteVendorModal.onOpenChange}
        onClose={deleteVendorModal.onClose}
      />
    </div>
  );
}

export default UserMenuActionButton;
