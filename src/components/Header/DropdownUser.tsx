import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  User,
  Button,
  Card,
  CardBody,
  Divider,
} from "@nextui-org/react";
import { FaChevronDown } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FiLogOut, FiSettings, FiUser } from "react-icons/fi";
import { UserDropdownLink } from "./UserDropdownLink";

export function DropdownUser(): JSX.Element {
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button variant="light" className="bg-transparent hover:bg-transparent">
          <User
            name="Hi Zoe Lang"
            description="Product Designer"
            className="transition-transform"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
          <div className="p-2 shadow-md">
            <FaChevronDown />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-2">
        <Card
          style={{ borderRadius: 0 }}
          radius="none"
          shadow="none"
          className="max-w-[300px] border-none bg-transparent rounded-none"
        >
          <CardBody className="p-0 space-y-2 rounded-none">
            <UserDropdownLink
              title="Visit website"
              icon={TbWorld}
              pathname=""
              hasSecondIcon
              isExternal
            />
            <Divider />
            <UserDropdownLink title="Admin Profile" icon={FiUser} pathname="" />
            <Divider />
            <UserDropdownLink title="Admin settings" icon={FiSettings} pathname="" />
            <Divider />
            <UserDropdownLink title="Log out" icon={FiLogOut} pathname="" />
          </CardBody>
        </Card>
      </PopoverContent>
    </Popover>
  );
}
