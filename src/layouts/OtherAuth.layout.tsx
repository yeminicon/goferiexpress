import { AuthRoutes } from "@/types/routes";
import { Link, Outlet } from "react-router-dom";
import { Image } from "@nextui-org/react";
import HelmetHeader from "@/components/Helmet";
import logo from "@/assets/AppLogo.png";

const OtherAuthLayout = () => {
  return (
    <>
      <HelmetHeader title="Forgot Password" description="" />
      <div className="h-screen">
        <div className="flex flex-col items-center py-12 space-y-20">
          <Link to={AuthRoutes.login}>
            <Image className="rounded-none" alt="logo" src={logo} height={75} width={200} />
          </Link>
          <div className="w-full sm:w-auto p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherAuthLayout;
