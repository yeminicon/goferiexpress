export const SidebarRoutes = {
  dashboard: "/dashboard",
  products: "/dashboard/products",
  orders: "/dashboard/orders",
  wallet: "/dashboard/wallet",
  users: "/dashboard/users",
  userDetails: "/dashboard/users/details",
  vendors: "/dashboard/vendors",
  vendorDetails: "/dashboard/vendors/details",
  settings: "/dashboard/settings",
  settingsAdvanced: "/dashboard/settings/advanced",
  settingsFreight: "/dashboard/settings/freight",
} as const;

export type SidebarRoutes = (typeof SidebarRoutes)[keyof typeof SidebarRoutes];

export const AuthRoutes = {
  landingPage: "/",
  hire: "/hire",
  goferid: "/gofer/:id",
  contact: "/contact",
  blog: "/blog",
  login: "/login",
  service: "/service",
  forgotPassword: "/forgot-password",
  changePassword: "/change-password",
} as const;

export type AuthRoutes = (typeof AuthRoutes)[keyof typeof AuthRoutes];
