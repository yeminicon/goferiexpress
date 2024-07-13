import { useState } from "react";
import { Link } from "react-router-dom";
import { Image, Input, Switch } from "@nextui-org/react";

import { FiSearch } from "react-icons/fi";
import { GoMoon } from "react-icons/go";
import { FiSun } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { useTheme } from "next-themes";
import AppLogo from "@/assets/AppLogo.png";
import { DropdownNotification } from "./DropdownNotification";
import { DropdownUser } from "./DropdownUser";

type HeaderT = {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
};

export const Header = (props: HeaderT): JSX.Element => {
  const [toggleTheme, setToggleTheme] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    setToggleTheme(!toggleTheme);
  };

  const handleOpenSidebar = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    props.setSidebarOpen(!props.sidebarOpen);
  };

  return (
    <header className="sticky top-0 z-20 flex w-full bg-white drop-shadow-1 dark:bg-darkest dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden ">
          <button
            aria-controls="sidebar"
            onClick={handleOpenSidebar}
            className="z-20 block rounded-sm border border-stroke p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <IoMenu />
          </button>

          <Link className="flex-shrink-0 hidden" to="/">
            <Image src={AppLogo} alt="Logo" />
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <ul className="flex items-center space-x-4">
            <DropdownNotification />
            <li>
              <Switch
                defaultSelected={theme === "dark"}
                size="md"
                onChange={() => handleToggleTheme()}
                thumbIcon={({ isSelected, className }) =>
                  isSelected ? <GoMoon className={className} /> : <FiSun className={className} />
                }
              ></Switch>
            </li>
          </ul>
        </div>

        <div className="hidden sm:block border- w-2/5">
          <div className="flex items-center space-x-4">
            <ul className="flex items-center space-x-4">
              <DropdownNotification />
            </ul>
            <form>
              <Input
                type="text"
                size="sm"
                variant="bordered"
                placeholder="Search pages and users"
                startContent={<FiSearch className="pointer-events-none flex-shrink-0" />}
                className="w-full bg-transparent text-black focus:outline-none dark:text-white"
              />
            </form>
            <DropdownUser />
          </div>
        </div>
      </div>
    </header>
  );
};
