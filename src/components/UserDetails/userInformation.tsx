import { userMoreInformation, userPersonalInformation } from "@/pages/Users/utils";
import { Avatar, Divider } from "@nextui-org/react";
import { FaChevronDown, FaRegClock } from "react-icons/fa6";

function UserInformation(): JSX.Element {
  return (
    <div className="mt-2 md:mt-4 lg:mt-8">
      <h3 className="font-medium text-lg">Personal info</h3>
      <p className="text-sm mt-1 text-gray-600 dark:text-white font-normal">
        A Comprehensive Overview of My Personal Information
      </p>
      <div className="w-full shadow-sm p-4 lg:p-6 border dark:border-dark rounded-lg mt-4">
        <div className="flex flex-col md:flex-row w-full lg:w-[70%] gap-6 flex-wrap">
          {userPersonalInformation.map((data, index) => (
            <div key={index} className="w-full lg:w-[45%]">
              <p className="text-sm">{data.label}</p>
              <div className="p-3 border dark:border-dark rounded-lg mt-1 text-sm">
                {data.value}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-5 dark:bg-dark">
        <Divider />
      </div>
      <div>
        <h3 className="font-medium text-lg">More info</h3>
        <p className="text-sm mt-1 text-gray-600 dark:text-white font-normal">
          Unveiling Additional Insights
        </p>
        <div className="w-full shadow-sm px-4 py-4 lg:px-6 lg:py-6 border dark:border-dark rounded-lg mt-4">
          <div className="flex flex-col md:flex-row w-full lg:w-[70%] gap-6 flex-wrap">
            {userMoreInformation.map((data, index) => (
              <div key={index} className="w-full lg:w-[45%]">
                <p className="text-sm">{data.label}</p>
                <div className="p-3 border dark:border-dark rounded-lg mt-1 text-sm">
                  {data.value}
                </div>
              </div>
            ))}
            <div className="w-full lg:w-[93%]">
              <h3 className="text-sm font-medium">Country</h3>
              <div className="px-3 py-2 border dark:border-dark rounded-lg mt-1 text-sm font-medium flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar alt="Argentina" className="w-6 h-6" src="https://flagcdn.com/ar.svg" />
                  <p>Argentina</p>
                </div>
                <FaChevronDown />
              </div>
            </div>
            <div className="w-full lg:w-[93%]">
              <h3 className="text-sm font-medium">Timezone</h3>
              <div className="px-3 py-2 border dark:border-dark rounded-lg mt-1 text-sm font-medium flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <FaRegClock />
                  <p>
                    Pacific Standard Time(PST) <span className="text-gray-600">UTC-08:00</span>
                  </p>
                </div>
                <FaChevronDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInformation;
