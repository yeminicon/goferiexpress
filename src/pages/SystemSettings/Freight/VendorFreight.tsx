import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Chip,
  Table,
  TableColumn,
  TableRow,
  TableCell,
  TableHeader,
  TableBody,
  Image,
  Card,
  CardBody,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Avatar,
} from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import { MdArrowBack } from "react-icons/md";
import { PiCubeBold } from "react-icons/pi";
import UsersTablePagination from "@/components/Users/usersTablePagination";
import { SidebarRoutes } from "@/types/routes";
import PageHeader from "@/components/PageHeader";

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Tech Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Sr. Dev",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/2.png",
    email: "jane.fisher@example.com",
  },
];

const vendors = [
  {
    profileImage: "https://bit.ly/prosper-baba",
    name: "Prosper Baba",
    id: "TJUY76849",
    freightType: "FREE",
    destination: {
      type: "Metropolitan",
      applied: ["122334", "23323", "13233", "543698", "34567"],
    },
  },
  {
    profileImage: "https://bit.ly/kent-c-dodds",
    name: "Kent Dodds",
    id: "TJU768490",
    freightType: "FIX",
    destination: {
      type: "Metropolitan",
      applied: ["122334", "23323", "13233", "543698", "34567"],
    },
  },
];

const freightType = {
  freeFreight: "freeFreight",
  fixFreight: "fixFreight",
};

export type FreightType = keyof typeof freightType;

export function VendorFreightSetting() {
  const [selected, setSelected] = useState<FreightType>("freeFreight");
  const navigate = useNavigate();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleBackButton = () => {
    navigate(SidebarRoutes.settings);
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value as FreightType);
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Button isIconOnly onClick={handleBackButton} className="bg-white shadow-md">
            <MdArrowBack />
          </Button>
          <PageHeader title="Freight setting" isInnerPage />
        </div>
        <Card>
          <CardBody className="space-y-6">
            <div className="flex items-center justify-between flex-wrap w-full">
              <div className="flex flex-col space-y-2">
                <div className="flex space-x-3 items-center">
                  <span className="text-lg text-primary font-medium">Basic Freight settings</span>
                  <span className="rounded-full bg-light px-2 text-xs text-primary">
                    24,000 Available Items
                  </span>
                </div>
                <p className="text-base font-medium text-medium">
                  Manage, Monitor, and Organize Your Complete Product Catalog with Ease
                </p>
              </div>
              <div className="hidden sm:block border- w-2/6">
                <form>
                  <Input
                    type="text"
                    size="sm"
                    variant="bordered"
                    placeholder="Search by vendor"
                    startContent={<FiSearch className="pointer-events-none flex-shrink-0" />}
                    className="w-full bg-transparent text-black focus:outline-none dark:text-white"
                  />
                </form>
              </div>
            </div>
            <div className="flex justify-between w-full items-center">
              <Button variant="flat" color="default" radius="sm">
                All Vendors
              </Button>
              <Button color="primary" radius="sm" onClick={onOpen}>
                Make Changes
              </Button>
            </div>

            <div className="">
              <Table
                radius="sm"
                removeWrapper
                selectionMode="multiple"
                aria-label="Vendors table"
                bottomContent={
                  <div className="flex w-full justify-center">
                    <UsersTablePagination />
                  </div>
                }
                className="shadow-none border-0"
              >
                <TableHeader>
                  <TableColumn className="dark:text-white dark:bg-dark">
                    <div className="flex gap-2 items-center">
                      <PiCubeBold className="text-xl" />
                      <span>Vendor/ID</span>
                    </div>
                  </TableColumn>
                  <TableColumn className="dark:text-white dark:bg-dark">Freight Type</TableColumn>
                  <TableColumn className="dark:text-white dark:bg-dark">
                    Destination Type
                  </TableColumn>
                  <TableColumn className="dark:text-white dark:bg-dark">
                    Applied Destinations
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  {vendors.map((vendor) => (
                    <TableRow key={vendor.id}>
                      <TableCell>
                        <div className="flex space-x-3">
                          <div>
                            <Image
                              width={40}
                              height={40}
                              radius="md"
                              alt={vendor.name}
                              src={vendor.profileImage}
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">{vendor.name}</h4>
                            <span className="text-xs font-normal text-gray-500 dark:text-white">
                              ID: #{vendor.id}
                            </span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Chip
                          size="sm"
                          variant="flat"
                          color="success"
                          className="text-xs capitalize"
                        >
                          {vendor.freightType}
                        </Chip>
                      </TableCell>
                      <TableCell>
                        <Chip
                          size="sm"
                          variant="flat"
                          color="primary"
                          className="text-xs capitalize"
                        >
                          {vendor.destination.type}
                        </Chip>
                      </TableCell>
                      <TableCell>
                        <Popover placement="bottom-start">
                          <PopoverTrigger>
                            <div className="flex gap-2">
                              {vendor.destination.applied.map((d, i) => (
                                <Chip key={i} size="sm" className="text-xs">
                                  {d}
                                </Chip>
                              ))}
                            </div>
                          </PopoverTrigger>
                          <PopoverContent className="rounded-md mt-1 p-0">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-3 py-3">
                              {Array.from({ length: 20 }).map((_, i) => (
                                <Chip key={i} size="sm" className="text-xs">
                                  12456
                                </Chip>
                              ))}
                            </div>
                          </PopoverContent>
                        </Popover>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Adjust Basic Freight</ModalHeader>
              <ModalBody>
                <div className="space-y-4 flex flex-col">
                  <div className="flex items-center justify-between w-full mb-4">
                    <span className="text-medium text-sm">Change to:</span>
                    <RadioGroup
                      orientation="horizontal"
                      size="sm"
                      value={selected}
                      onChange={handleRadioChange}
                    >
                      <Radio value="freeFreight">Free Freight</Radio>
                      <Radio value="fixFreight">Fix Freight</Radio>
                    </RadioGroup>
                  </div>
                  <div
                    className={`flex items-center ${selected === "fixFreight" ? "justify-between space-x-3" : ""}`}
                  >
                    <Input
                      label="Select destination type"
                      labelPlacement="outside"
                      placeholder="Enable Buy Now candidate"
                      className="py-4"
                      disabled
                    />
                    {selected === "fixFreight" && (
                      <Input
                        label="Enter Fixed Freight"
                        labelPlacement="outside"
                        placeholder="$ 300"
                        className="py-4 w-3/5"
                      />
                    )}
                  </div>
                  <div className="">
                    <Select
                      items={users}
                      label="Select applied destinations"
                      placeholder="Destinations Selected"
                      labelPlacement="outside"
                    >
                      {(user) => (
                        <SelectItem key={user.id} textValue={user.name}>
                          <div className="flex gap-2 items-center">
                            <Avatar
                              alt={user.name}
                              className="flex-shrink-0"
                              size="sm"
                              src={user.avatar}
                            />
                            <div className="flex flex-col">
                              <span className="text-small">{user.name}</span>
                              <span className="text-tiny text-default-400">{user.email}</span>
                            </div>
                          </div>
                        </SelectItem>
                      )}
                    </Select>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className=" justify-start">
                <Button color="primary" onPress={onClose}>
                  Done
                </Button>
                <Button color="primary" variant="bordered" onPress={onClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
