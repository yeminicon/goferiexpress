import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Divider,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollShadow,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { FiChevronsLeft, FiChevronsRight, FiLogOut, FiSettings } from "react-icons/fi";
import AppLogo from "@/assets/AppLogo.png";
import { SidebarRoutes } from "@/types/routes";
import { sidebarLinks } from "./sidebarLinks";
import { SidebarLink } from "./SidebarLink";
import { CustomTooltip } from "./CustomTooltip";
import { motion } from "framer-motion";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
};

export const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const [isSnapped, setIsSnapped] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const triggerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const { isOpen,  onOpenChange } = useDisclosure();

  const toggleSnapped = useCallback(() => {
    setIsSnapped((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(() => setSidebarOpen(false), [setSidebarOpen]);

  useEffect(() => {
    const clickOutsideHandler = ({ target }: MouseEvent) => {
      if (
        sidebarOpen &&
        !sidebarRef.current?.contains(target as Node) &&
        !triggerRef.current?.contains(target as Node) &&
        !backdropRef.current?.contains(target as Node)
      ) {
        closeSidebar();
      }
    };

    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (sidebarOpen && keyCode === 27) {
        closeSidebar();
      }
    };

    document.addEventListener("click", clickOutsideHandler);
    document.addEventListener("keydown", keyHandler);

    return () => {
      document.removeEventListener("click", clickOutsideHandler);
      document.removeEventListener("keydown", keyHandler);
    };
  }, [sidebarOpen, closeSidebar]);

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (sidebarOpen && keyCode === 27) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  }, [sidebarOpen, setSidebarOpen]);

  return (
    <>
      {sidebarOpen && (
        <div
          ref={backdropRef}
          className="fixed inset-0 bg-[#1F263E] bg-opacity-50 z-40"
          onClick={() => closeSidebar()}
        ></div>
      )}

      <aside
        ref={sidebarRef}
        className={`absolute left-0 top-0 z-50 flex flex-col items-start justify-start overflow-y-clip bg-[#f5f6fa] transition-transform duration-300 ease-linear dark:bg-dark lg:static lg:translate-x-0 h-screen ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }  ${isSnapped ? "animate-sidebar-width-snap " : "animate-sidebar-width-inc"}`}
      >
        <div className="w-full flex justify-start bg-[#1F263E] ">
          <div className={`flex w-full items-center justify-between px-6 py-4 `}>
            <NavLink
              to="/"
              className={`${!isSnapped ? "animate-sidebar-text-show" : "animate-sidebar-text-hide"}`}
            >
              <Image src={AppLogo} className="w-[50px] h-[25px]" alt="Logo" />
            </NavLink>
            <CustomTooltip title="Expand" isSnapped={isSnapped}>
              <Button
                isIconOnly
                aria-label="switch-nav"
                onClick={toggleSnapped}
                className="bg-light dark:bg-transparent"
              >
                {!isSnapped ? (
                  <FiChevronsLeft className="text-dark dark:text-white text-xl" />
                ) : (
                  <FiChevronsRight className="text-dark dark:text-white text-xl" />
                )}
              </Button>
            </CustomTooltip>
          </div>
        </div>

        <div className="w-full flex flex-col overflow-y-auto duration-300 ease-linear">
          <ScrollShadow hideScrollBar={true} as={"nav"} className={`p-4`}>
            <div className="overflow-x-hidden w-full">
              <ul className={`flex flex-col space-y-1  ${isSnapped ? "space-y-2" : ""}`}>
                {sidebarLinks.map((link) => (
                  <li
                    key={link.pathname}
                    onMouseEnter={() => setFocused(link.title)}
                    className="group relative"
                  >
                    <SidebarLink
                      pathname={link.pathname}
                      title={link.title}
                      icon={link.icon}
                      isSnapped={isSnapped}
                      sidebarOpen={sidebarOpen}
                      setSidebarOpen={closeSidebar}
                    />
                    {focused === link.title ? (
                      <motion.div
                        transition={{
                          layout: {
                            duration: 0.2,
                            ease: "easeOut",
                          },
                        }}
                        className="absolute bottom-0 left-0 right-0 w-full h-full group-hover:text-dark bg-light/90 px-5 pr-8 m-0 z-0 rounded-lg space-x-0"
                        layoutId="highlight"
                      />
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollShadow>
          <div
            className={`w-full overflow-hidden p-4 pt-[calc(100vh-55rem)]  space-y-4 ${!isSnapped && "w-full"}`}
          >
            <Divider />
            <ul className="flex flex-col gap-1 mb-2">
              <li className="group hover:text-white">
                <SidebarLink
                  pathname={SidebarRoutes.settings}
                  title="System Settings"
                  isSnapped={isSnapped}
                  icon={FiSettings}
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={closeSidebar}
                />
              </li>

              <li className="group hover:text-white">
                <Tooltip
                  placement="right"
                  content={isSnapped && <span className="text-xs">Log out</span>}
                  className={`${!isSnapped && "hidden"}`}
                >
                  <Button
                    isIconOnly={!!isSnapped}
                    aria-label="Logout"
                    className="group relative flex items-center gap-2 rounded-md py-2 px-4 font-medium text-dark dark:text-white duration-300 ease-in-out hover:bg-primary bg-light transition-transform justify-start w-full dark:bg-transparent dark:hover:bg-primary"
                  >
                    {isSnapped ? (
                      <FiLogOut className="text-dark dark:text-white text-xl group-hover:text-white" />
                    ) : (
                      <p className="font-medium text-base text-dark dark:text-white group-hover:text-white">
                        Log out
                      </p>
                    )}
                  </Button>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <Modal isOpen={isOpen} placement="auto" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-center">Switch Dashboards</ModalHeader>
              <ModalBody>
                <p className="text-center">COMING SOON</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
