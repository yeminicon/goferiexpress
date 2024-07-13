import { Image, Snippet } from "@nextui-org/react";
import { IoDiamondOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { BackButton } from "@/components/BackButton";


// interface FilterItem {
//   id: string;
//   name: string;
//   profession: string;
//   experience: string;
//   category: string;
//   avrRank: number;
//   salaryExp: number;
//   age: number;
// }


interface Props {
  isVIP?: boolean;
  userId: string;
  backRoute: string;
  filterItem: any;
  
}

function UserDetailsHeroCard({ isVIP, backRoute,  filterItem }: Props): JSX.Element {
  return (
    <div className="bg-[#1a1f35] px-6 py-7 space-y-8">
      <BackButton route={backRoute} />
      <div className="gap-4 flex lg:gap-8 items-center">
        <Image
          width={120}
          height={120}
          radius="full"
          alt="profile image"
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          className="border-3"
        />
        <div className="space-y-2">
          

          <div className="flex items-center gap-2">
            <p className="text-white text-sm md:text-base lg:text-lg font-medium">
              Gofers ID:
              <Snippet size="sm" symbol="" className="bg-transparent text-white">
               {filterItem.id}
              </Snippet>
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <h1 className="font-bold text-xl md:text-3xl lg:text-4xl text-white">{filterItem.name}</h1>
            {isVIP && (
              <>
                <div className="text-xs font-medium bg-slate-100 text-blue-500 py-2 rounded-2xl flex justify-center items-center gap-2 px-4">
                  <IoDiamondOutline />
                  <p>Diamond-VIP</p>
                </div>
                <FaRegEdit className="text-white text-lg" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsHeroCard;
