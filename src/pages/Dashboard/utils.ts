import { TableStatsOverview, TopSellingProductProps } from "./dashboard.interface";
import RedShoe from "../../assets/images/red-shoe.png";
import { FiShoppingBag } from "react-icons/fi";
import { BiSolidCoinStack } from "react-icons/bi";
import { FaShuttleVan } from "react-icons/fa";

export const usersOverviewTableData: Array<TableStatsOverview> = [
  {
    initial: "TU",
    title: "Total users",
    total: 10425,
    progress: "+2",
  },
  {
    initial: "AU",
    title: "Active users",
    total: 10425,
    progress: "-72",
  },
  {
    initial: "NU",
    title: "New users",
    total: 10425,
    progress: "+2",
  },
  {
    initial: "CR",
    title: "Conversion rate",
    total: 10425,
    progress: "+2",
  },
];

export const vendorsOverviewTableData: Array<TableStatsOverview> = [
  {
    initial: "TV",
    title: "Total Vendors",
    total: 10425,
    progress: "+2",
  },
  {
    initial: "AV",
    title: "Active Vendors",
    total: 10425,
    progress: "-72",
  },
  {
    initial: "IV",
    title: "Inactive Vendors",
    total: 10425,
    progress: "+2",
  },
  {
    initial: "NV",
    title: "New Vendors",
    total: 10425,
    progress: "+2",
  },
];

export const topSellingProductData: Array<TopSellingProductProps> = [
  {
    image: RedShoe,
    productTitle: "Red shoe",
    productType: "shoe",
    vendor: "Society6",
    status: "Best buy",
    revenue: "$100",
  },
  {
    image: RedShoe,
    productTitle: "Beauty lotion",
    productType: "lotion",
    vendor: "Pura Vida Bracelets",
    status: "On Sales",
    revenue: "$100",
  },
  {
    image: RedShoe,
    productTitle: "White watch",
    productType: "watch",
    vendor: "TeePublic",
    status: "Just released",
    revenue: "$100",
  },
  {
    image: RedShoe,
    productTitle: "Mid lotion",
    productType: "make-up",
    vendor: "Birchbox",
    status: "New",
    revenue: "$100",
  },
  {
    image: RedShoe,
    productTitle: "Dove",
    productType: "soap",
    vendor: "Dove",
    status: "Just released",
    revenue: "$100",
  },
  {
    image: RedShoe,
    productTitle: "Yellow bag",
    productType: "shoe",
    vendor: "Society6",
    status: "Just released",
    revenue: "$100",
  },
  {
    image: RedShoe,
    productTitle: "Blue can",
    productType: "cup",
    vendor: "Soko Glam",
    status: "Just released",
    revenue: "$100",
  },
  {
    image: RedShoe,
    productTitle: "Hollow",
    productType: "perfume",
    vendor: "UGMONK",
    status: "Just released",
    revenue: "$100",
  },
  {
    image: RedShoe,
    productTitle: "Leather watch",
    productType: "watch",
    vendor: "Society6",
    status: "Just released",
    revenue: "$100",
  },
];

export const dashboardDateTab = [
  {
    id: "today",
    label: "Today",
    statCardData: [
      {
        title: "Successful Campaigns",
        figure: "0",
        icon: FiShoppingBag,
      },
      {
        title: "Pending Campaigns",
        figure: "0",
        icon: BiSolidCoinStack,
      },
      {
        title: "Failed Campaigns",
        figure: "0",
        icon: FaShuttleVan,
      },
    ],
    orderAnalyticsCategories: [
      "00:00",
      "02:00",
      "04:00",
      "06:00",
      "08:00",
      "10:00",
      "12:00",
      "14:00",
      "16:00",
      "18:00",
      "20:00",
      "22:00",
    ],
    orderAnalyticsDataSeries: [
      {
        name: "Products",
        data: [
          0, 18000, 24000, 27000, 20000, 30000, 51000, 41000, 43000, 55000, 65000, 90000, 92000,
        ],
      },
      {
        name: "Orders",
        data: [
          0, 16000, 25000, 41000, 38000, 41000, 38000, 43000, 38000, 35000, 30000, 60000, 45000,
        ],
      },
    ],
  },
  {
    id: "week",
    label: "Week",
    statCardData: [
      {
        title: "Total Products",
        figure: "238,788",
        icon: FiShoppingBag,
      },
      {
        title: "Total Earning",
        figure: "$13,485.23",
        icon: BiSolidCoinStack,
      },
      {
        title: "Total Orders",
        figure: "394,567",
        icon: FaShuttleVan,
      },
    ],
    orderAnalyticsCategories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    orderAnalyticsDataSeries: [
      {
        name: "Products",
        data: [0, 18000, 24000, 27000, 43000, 55000, 65000, 90000],
      },
      {
        name: "Orders",
        data: [0, 16000, 25000, 41000, 38000, 35000, 30000, 60000],
      },
    ],
  },
  {
    id: "month",
    label: "Month",
    statCardData: [
      {
        title: "Total Products",
        figure: "2,438,788",
        icon: FiShoppingBag,
      },
      {
        title: "Total Earning",
        figure: "$132,456.23",
        icon: BiSolidCoinStack,
      },
      {
        title: "Total Orders",
        figure: "884,567",
        icon: FaShuttleVan,
      },
    ],
    orderAnalyticsCategories: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],
    orderAnalyticsDataSeries: [
      {
        name: "Products",
        data: [
          0, 3000, 6000, 9000, 12000, 15000, 18000, 21000, 24000, 27000, 30000, 33000, 36000, 39000,
          42000, 45000, 48000, 51000, 54000, 57000, 60000, 63000, 66000, 69000, 72000, 75000, 78000,
          81000, 84000, 87000,
        ],
      },
      {
        name: "Orders",
        data: [
          0, 2500, 5000, 7500, 10000, 12500, 15000, 17500, 20000, 22500, 25000, 27500, 30000, 32500,
          35000, 37500, 40000, 42500, 45000, 47500, 50000, 52500, 55000, 57500, 60000, 62500, 65000,
          67500, 70000, 72500,
        ],
      },
    ],
  },
  {
    id: "year",
    label: "Year",
    statCardData: [
      {
        title: "Total Products",
        figure: "12,438,788",
        icon: FiShoppingBag,
      },
      {
        title: "Total Earning",
        figure: "$1,332,456",
        icon: BiSolidCoinStack,
      },
      {
        title: "Total Orders",
        figure: "8,894,567",
        icon: FaShuttleVan,
      },
    ],
    orderAnalyticsCategories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    orderAnalyticsDataSeries: [
      {
        name: "Products",
        data: [0, 18000, 24000, 27000, 20000, 30000, 51000, 41000, 43000, 55000, 65000, 90000],
      },
      {
        name: "Orders",
        data: [0, 16000, 25000, 41000, 38000, 41000, 38000, 43000, 38000, 35000, 30000, 60000],
      },
    ],
  },
];
