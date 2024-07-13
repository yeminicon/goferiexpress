import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import HelmetHeader from "@/components/Helmet";
import { sidebarLinks } from "@/components/Sidebar/sidebarLinks";
import { SidebarRoutes } from "@/types/routes";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const mainLink = sidebarLinks.find((link) => link.pathname === location.pathname);

  const seo =
    location.pathname === SidebarRoutes.settings
      ? { title: "System Settings", description: "" }
      : { title: mainLink?.seo?.title, description: mainLink?.seo?.description };

  return (
    <>
      <HelmetHeader title={seo.title || ""} description={seo.description || ""} />
      <div className="dark:bg-darkest dark:text-white">
        <div className="flex h-screen overflow-hidden">
          <Sidebar sidebarOpen={isSidebarOpen} setSidebarOpen={setIsSidebarOpen} />
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header sidebarOpen={isSidebarOpen} setSidebarOpen={setIsSidebarOpen} />
            <main>
              <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                <Outlet />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
