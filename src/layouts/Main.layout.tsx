import { Link, Outlet } from "react-router-dom";
import { Image } from "@nextui-org/react";
import logo from "@/assets/AppLogo.png";
import { AuthRoutes } from "@/types/routes";
import HelmetHeader from "@/components/Helmet";

function MainLayout(): JSX.Element {
  return (
    <>
      <HelmetHeader title="Login" description="PPN Admin login" />
      <div className="overflow-y-auto md:overflow-y-hidden  md:flex relative h-screen justify-between items-center ">
        <div className="hidden md:block w-full xl:w-2/4 h-full bg-top bg-repeat-y	 bg-cover	 bg-[#393DDC] bg-[url('/src/assets/loginBg.png')]"></div>
        <div className="overflow-y-auto flex w-full h-full xl:w-2/4 flex-col items-center py-12 px-4">
          <div className="flex flex-col w-full md:w-auto h-full justify-around sm:justify-between lg:justify-around items-center">
            <Link to={AuthRoutes.login} className="mt-6 md:mt-8">
              <Image className="rounded-none" alt="logo" src={logo} height={75} width={200} />
            </Link>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;

