import { Input } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import PageHeader from "@/components/PageHeader";
import UsersDataTable from "@/components/Users/usersDataTable";
import UsersDateTab from "@/components/Users/usersDateTab";
import ExportStatsButton from "@/components/exportStatsButton";
import FilterByDateInput from "@/components/filterByDateInput";

function UsersPage(): JSX.Element {
  return (
    <div>
      <PageHeader title="Campaigns Analytics" />
      <div className="w-full border dark:border-dark p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm">
        <div className="flex flex-wrap gap-4 md:gap-0 md:flex-nowrap justify-between w-full relative">
          <UsersDateTab />
          <div className="flex gap-5 items-center absolute top-14 md:top-0 right-0">
            <FilterByDateInput />
            <ExportStatsButton />
          </div>
        </div>
      </div>
      <div className="w-full border dark:border-dark rounded-xl md:rounded-2xl shadow-sm mt-6 md:mt-8">
        <div className="px-4 md:px-6 pt-4 md:pt-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium">All Users</h3>
                <div className="text-xs font-medium text-primary px-2 py-1 bg-slate-200 dark:bg-dark rounded-full">
                  24,000 accounts
                </div>
              </div>
              <div className="pt-1">
                <p className="text-base text-gray-500 dark:text-white">
                  Effortlessly Manage and Gain Insights into Your User Base
                </p>
              </div>
            </div>
            <div>
              <ExportStatsButton />
            </div>
          </div>
          <div className="flex justify-end pt-10 pb-3">
            <div className="w-96">
              <Input
                type="text"
                placeholder="Search by username/email/ID"
                size="sm"
                fullWidth
                radius="sm"
                variant="bordered"
                startContent={<FiSearch className="text-xl text-gray-400" />}
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div>
          <UsersDataTable />
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
