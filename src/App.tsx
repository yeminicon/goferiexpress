import DashboardLayout from "@/layouts/Dashboard.layout";
import MainLayout from "@/layouts/Main.layout";
import OtherAuthLayout from "@/layouts/OtherAuth.layout";

import ErrorPage from "@/modules/ErrorPage";

import Dashboard from "@/pages/Dashboard";
import ProductsPage from "@/pages/Products";
import LoginPage from "@/pages/Login";

import ForgotPasswordPage from "@/pages/ForgotPassword";
import ChangePasswordPage from "@/pages/ChangePassword";
import UsersPage from "@/pages/Users";
import UserDetailsPage from "@/pages/Users/UserDetails";
import VendorsPage from "@/pages/Vendors";
import VendorDetails from "@/pages/Vendors/VendorDetails";
import OrdersPage from "@/pages/Orders";
import SystemSettingsPage from "@/pages/SystemSettings";
import { AdvancedProfit } from "@/pages/SystemSettings/Profit/AdvancedProfit";
import { VendorFreightSetting } from "@/pages/SystemSettings/Freight/VendorFreight";

import { AuthRoutes, SidebarRoutes } from "@/types/routes";
import { sentryCreateBrowserRouter } from "./sentryConfig";
import WalletPage from "./pages/Wallet";
import LandingPage from "./pages/LandingPage";
import Expert from "./pages/Expert";
import ServicePage from "./pages/service";
import GoferDetails from "./pages/gofers";
import ContactPage from "./pages/contact";
import BlogList from "./pages/Blog/blogList";
import { posts } from "./pages/Blog/data";

export const router = sentryCreateBrowserRouter([
  {
    path: AuthRoutes.landingPage,

    errorElement: <ErrorPage />,
    children: [
      {
        path: AuthRoutes.landingPage,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: AuthRoutes.hire,
    element: <Expert />,
  },
  {
    path: AuthRoutes.service,
    element: <ServicePage />,
  },
  {
    path: AuthRoutes.goferid,
    element: <GoferDetails />,
  },
  {
    path: AuthRoutes.contact,
    element: <ContactPage />,
  },
  {
    path: AuthRoutes.blog,
    element: <BlogList  posts={posts} />,
  },
  {
    path: AuthRoutes.login,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: AuthRoutes.login,
        element: <LoginPage />,
      },
    ],
  },
  {
    element: <OtherAuthLayout />,
    children: [
      {
        path: AuthRoutes.forgotPassword,
        element: <ForgotPasswordPage />,
      },
      {
        path: AuthRoutes.changePassword,
        element: <ChangePasswordPage />,
      },
    ],
  },
  {
    path: SidebarRoutes.dashboard,
    element: <DashboardLayout />,
    children: [
      {
        path: SidebarRoutes.dashboard,
        element: <Dashboard />,
      },
      {
        path: SidebarRoutes.products,
        element: <ProductsPage />,
      },

      {
        path: SidebarRoutes.wallet,
        element: <WalletPage />,
      },

      {
        path: SidebarRoutes.users,
        element: <UsersPage />,
      },
      {
        path: SidebarRoutes.userDetails,
        element: <UserDetailsPage />,
      },
      {
        path: SidebarRoutes.settings,
        element: <SystemSettingsPage />,
      },
      {
        path: SidebarRoutes.settingsAdvanced,
        element: <AdvancedProfit />,
      },
      {
        path: SidebarRoutes.vendors,
        element: <VendorsPage />,
      },
      {
        path: SidebarRoutes.vendorDetails,
        element: <VendorDetails />,
      },
      {
        path: SidebarRoutes.orders,
        element: <OrdersPage />,
      },
      {
        path: SidebarRoutes.settingsFreight,
        element: <VendorFreightSetting />,
      },
    ],
  },
]);
