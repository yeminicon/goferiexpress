import {
  Image,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  useDisclosure,
  Avatar,
  Badge,
} from "@nextui-org/react";
import { PiCubeBold } from "react-icons/pi";
import { allCampaignsTable } from "./utils";
import { SidebarRoutes } from "@/types/routes";
import { FiMessageSquare } from "react-icons/fi";
//   import CampaignMenuActionButton from "./campaignMenuActionButton";
import { NotificationModal } from "../NotificationModal";
import { Link } from "react-router-dom";
import { useState } from "react";

function CampaignsTable(): JSX.Element {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allCampaignsTable.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(allCampaignsTable.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  console.log(currentItems.length);

  return (
    <div className="overflow-x-auto overflow-y-hidden">
      {currentItems.length === 0 ? (
        "there is no transaction "
      ) : (
        <Table
          radius="sm"
          removeWrapper
          aria-label="Total campaigns table"
          bottomContent={
            <div className="flex w-full justify-flex items-between justify-between px-5 pb-4">
              <div className="flex justify-between w-full mt-4">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 mx-2 border rounded-full disabled:opacity-50"
                >
                  Prev.
                </button>
                <div>
                  {pageNumbers.map((number) => (
                    <button
                      key={number}
                      onClick={() => handlePageChange(number)}
                      className={`px-3 py-1 mx-1 border rounded-full ${
                        currentPage === number ? "bg-gray-300" : ""
                      }`}
                    >
                      {number}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 mx-2 border rounded-full disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          }
          classNames={{
            th: "bg-lightest font-normal text-dark dark:bg-dark text-xs dark:text-white px-5 py-3",
            td: "border-b-1 dark:border-dark h-16 px-5 text-gray-600 dark:text-white text-xs",
            thead: "table-header",
          }}
        >
          <TableHeader>
            <TableColumn>
              <div className="flex gap-2 items-center">
                <PiCubeBold className="text-xl" />
                <p>Gofer/ID</p>
              </div>
            </TableColumn>
            <TableColumn>Emails</TableColumn>
            <TableColumn>Time added</TableColumn>
            <TableColumn>Country</TableColumn>
          </TableHeader>
          <TableBody>
            {currentItems.map((campaign, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <Link to={SidebarRoutes.dashboard}>
                      <div className="flex gap-3 items-center">
                        <div>
                          <Badge content="" color="success" size="sm" placement="bottom-right">
                            <Avatar radius="sm" src={campaign.profileImage} />
                          </Badge>
                        </div>
                        <div>
                          <h3 className="text-sm text-black dark:text-white font-medium">
                            {campaign.name}
                          </h3>
                          <p>ID: #{campaign.id}</p>
                        </div>
                      </div>
                    </Link>
                  </TableCell>
                  <TableCell>{campaign.email}</TableCell>
                  <TableCell>{campaign.timeAdded}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-10">
                      <Image
                        width={25}
                        height={25}
                        radius="full"
                        alt="Country Flag"
                        src={campaign.countryFlag}
                      />
                      <div className="flex items-center gap-5">
                        <div onClick={onOpen} className="cursor-pointer">
                          <FiMessageSquare className="text-xl" />
                        </div>
                        <div>{/* <CampaignMenuActionButton /> */}</div>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}

      <NotificationModal
        title="Notify Admin"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </div>
  );
}

export default CampaignsTable;
