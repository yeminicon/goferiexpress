import PageHeader from "@/components/PageHeader";
import VendorsTable from "@/components/Vendors/vendorsTable";
// import ExportStatsButton from "@/components/exportStatsButton";
import { Input } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";

function VendorsPage(): JSX.Element {
  return (
    <div>
      <PageHeader title="Gofers" />
      <div className="w-full border dark:border-dark rounded-xl md:rounded-2xl shadow-sm">
        <div className="px-4 md:px-6 pt-4 md:pt-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium">All Gofers</h3>
                <div className="text-xs font-medium text-primary px-2 py-1 bg-slate-200 dark:bg-dark rounded-full">
                  24,000 registered gofers
                </div>
              </div>
              <div className="pt-1">
                <p className="text-base text-gray-500 dark:text-white">List of all gofers</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end pt-10 pb-3">
            <div className="w-96">
              <Input
                type="text"
                placeholder="Search by gofers name/email/ID"
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
          <VendorsTable />
        </div>
      </div>
    </div>
  );
}

export default VendorsPage;
