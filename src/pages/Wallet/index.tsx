import StatsCard from "@/components/Dashboard/statsCard";
import AllWalletsTable from "@/components/Wallet/allWalletsTable";
import PageHeader from "@/components/PageHeader";
import FilterByDateInput from "@/components/filterByDateInput";
import {
  Input,
  Modal,
  useDisclosure,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import { MdLeakAdd, MdOutlineAccountBalanceWallet } from "react-icons/md";
import { AiOutlineAccountBook } from "react-icons/ai";

function WalletPage(): JSX.Element {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <PageHeader title="Wallet" />
      <div className="w-full border dark:border-dark p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm">
        <div className="flex flex-row justify-between py-3">
          <h1 className="font-bold text-[1rem] text-[#41465b] dark:text-[#F5F6FA]">
            Account information
          </h1>
          <Button
            onClick={onOpen}
            className="font-bold text-[1rem]  text-[#41465b] dark:text-[#F5F6FA]"
          >
            Fund your account
          </Button>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-8 md:flex-nowrap justify-between w-full relative">
          <StatsCard
            title="Account number"
            figure="8144616094"
            icon={MdOutlineAccountBalanceWallet}
          />
          <StatsCard title="Account balance" figure="0" icon={AiOutlineAccountBook} />
          <StatsCard title="Account type" figure="Prepaid" icon={MdLeakAdd} />
        </div>
      </div>
      <div className="w-full border dark:border-dark rounded-xl md:rounded-2xl shadow-sm mt-4 lg:mt-8">
        <div className="px-4 md:px-6 pt-4 md:pt-6">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium">All Transactions</h3>
              <div className="text-xs font-medium text-primary px-2 py-1 bg-slate-200 dark:bg-dark rounded-full">
                0
              </div>
            </div>
            <div className="pt-1">
              <p className="text-base text-gray-500 dark:text-white">
                An overview of all account transaction
              </p>
            </div>
          </div>
          <div className="flex justify-end py-3">
            <div className="flex items-center gap-4">
              <div className="lg:w-96">
                <Input
                  type="text"
                  placeholder="Search by user, vendor and product"
                  size="sm"
                  fullWidth
                  radius="sm"
                  variant="bordered"
                  startContent={<FiSearch className="text-xl text-gray-400" />}
                  className="w-full"
                />
              </div>
              <FilterByDateInput />
            </div>
          </div>
        </div>
        <div>
          <AllWalletsTable />
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Fund your account</ModalHeader>
              <ModalBody>
                <p className="font-bold text-1xl mt-10">OOOP!</p>
                <p className="text-red">Currently not available</p>
                <p>Service in Progress</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default WalletPage;
