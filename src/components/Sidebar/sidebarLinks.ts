import { SidebarRoutes } from "@/types/routes";
import { IconType } from "react-icons";
import { FiBarChart2, FiBox, FiHelpCircle, FiShoppingBag } from "react-icons/fi";

export type SidebarLinkT = {
  title: string;
  icon: IconType;
  pathname: SidebarRoutes;
  seo?: { title: string; description: string };
};

export const sidebarLinks: SidebarLinkT[] = [
  {
    title: "Dashboard",
    pathname: SidebarRoutes.dashboard,
    icon: FiBarChart2,
    seo: {
      title: "Analytics",
      description: "Admin Dashboard Overview",
    },
  },
  {
    title: "Campaigns",
    pathname: SidebarRoutes.products,
    icon: FiShoppingBag,
    seo: {
      title: "Start a Campaigns",
      description: "Manage, Monitor, and Organize Your Complete Product Catalog with Ease",
    },
  },

  {
    title: "Contacts",
    pathname: SidebarRoutes.vendors,
    icon: FiBox,
    seo: {
      title: "All Vendors",
      description: "List of all vendors",
    },
  },

  {
    title: "Wallet",
    pathname: SidebarRoutes.wallet,
    icon: FiHelpCircle,
    seo: {
      title: "Wallet",
      description: "The Guardians of our digital realm",
    },
  },
];
