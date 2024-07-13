import React from "react";
import { Popover, PopoverTrigger, PopoverContent, Divider, useDisclosure } from "@nextui-org/react";
import { IoEllipsisVertical } from "react-icons/io5";
import { Link } from "react-router-dom";
import BanUserModal from "./banUserModal";
import DeleteUserModal from "./deleteUserModal";
import { SidebarRoutes } from "@/types/routes";

function UserMenuActionButton(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const banUserModal = useDisclosure();
  const deleteUserModal = useDisclosure();

  const openBanUserModal = (): void => {
    setIsOpen(false);
    banUserModal.onOpen();
  };

  const openDeleteUserModal = (): void => {
    setIsOpen(false);
    deleteUserModal.onOpen();
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
            <Link to={SidebarRoutes.userDetails}>
              <div className="py-3 pl-3 pr-36 cursor-pointer">
                <p className="text-sm font-medium">User profile</p>
              </div>
            </Link>
            <Divider orientation="horizontal" />
            <div onClick={openBanUserModal} className="py-3 pl-3 pr-36 cursor-pointer">
              <p className="text-sm font-medium">Ban user</p>
            </div>
            <Divider orientation="horizontal" />
            <div onClick={openDeleteUserModal} className="py-3 pl-3 pr-36 cursor-pointer">
              <p className="text-sm font-medium">Delete user</p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <BanUserModal
        isOpen={banUserModal.isOpen}
        onOpenChange={banUserModal.onOpenChange}
        onClose={banUserModal.onClose}
      />
      <DeleteUserModal
        isOpen={deleteUserModal.isOpen}
        onOpenChange={deleteUserModal.onOpenChange}
        onClose={deleteUserModal.onClose}
      />
    </div>
  );
}

export default UserMenuActionButton;
