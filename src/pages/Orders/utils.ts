import { AllOrdersTableProps } from "./orders.interface";
import RedShoe from "@/assets/images/red-shoe.png";

export const allOrdersData: Array<AllOrdersTableProps> = [
  {
    productImage: RedShoe,
    productName: "Heather Ford",
    vendorName: "ModCloth",
    quantity: "x30",
    orderId: "ID: 3788DEUDKMKOUE",
    username: "Fredrick Precious",
    timeOfOrder: "3:00 - Today",
    status: "Fulfilled",
    numberOfItems: 30,
    attachment: 1,
  },
  {
    productImage: RedShoe,
    productName: "Eriks Mclean",
    vendorName: "Huckberry",
    quantity: "x2",
    orderId: "ID: 3788DEUDKMKOUE",
    username: "Fredrick Precious",
    timeOfOrder: "4:00 - 09/23",
    status: "Pending",
    numberOfItems: 30,
    attachment: 2,
  },
  {
    productImage: RedShoe,
    productName: "Mnz",
    vendorName: "Soko Glam",
    quantity: "x4",
    orderId: "ID: 3788DEUDKMKOUE",
    username: "Fredrick Precious",
    timeOfOrder: "4:00 - 09/23",
    status: "Cancelled",
    numberOfItems: 30,
    attachment: 0,
  },
  {
    productImage: RedShoe,
    productName: "Md Salman",
    vendorName: "UGMONK",
    quantity: "x1",
    orderId: "ID: 3788DEUDKMKOUE",
    username: "Fredrick Precious",
    timeOfOrder: "4:00 - 09/23",
    status: "Cancelled",
    numberOfItems: 30,
    attachment: 2,
  },
  {
    productImage: RedShoe,
    productName: "Priscilla Du Preez ca",
    vendorName: "UGMONK",
    quantity: "x2",
    orderId: "ID: 3788DEUDKMKOUE",
    username: "Fredrick Precious",
    timeOfOrder: "4:00 - 09/23",
    status: "Cancelled",
    numberOfItems: 30,
    attachment: 2,
  },
  {
    productImage: RedShoe,
    productName: "Mnz",
    vendorName: "Soko Glam",
    quantity: "x4",
    orderId: "ID: 3788DEUDKMKOUE",
    username: "Fredrick Precious",
    timeOfOrder: "4:00 - 09/23",
    status: "Cancelled",
    numberOfItems: 30,
    attachment: 2,
  },
  {
    productImage: RedShoe,
    productName: "Mnz",
    vendorName: "Soko Glam",
    quantity: "x4",
    orderId: "ID: 3788DEUDKMKOUE",
    username: "Fredrick Precious",
    timeOfOrder: "4:00 - 09/23",
    status: "Cancelled",
    numberOfItems: 30,
    attachment: 2,
  },
];

export const orderDateTab = [
  {
    id: "today",
    label: "Today",
    totalOrders: "88",
    orderPieChartSeries: [850, 5679, 8504],
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
        name: "Cancelled",
        data: [
          0, 18000, 24000, 27000, 20000, 30000, 51000, 41000, 43000, 55000, 65000, 90000, 92000,
        ],
      },
      {
        name: "Pending",
        data: [
          0, 16000, 25000, 41000, 38000, 41000, 38000, 43000, 38000, 35000, 30000, 60000, 45000,
        ],
      },
      {
        name: "Fulfilled",
        data: [
          0, 13000, 28000, 33000, 50000, 44000, 35000, 40000, 35000, 39000, 31000, 62000, 49000,
        ],
      },
    ],
  },
  {
    id: "week",
    label: "Week",
    totalOrders: "120",
    orderPieChartSeries: [200, 400, 300],
    orderAnalyticsCategories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    orderAnalyticsDataSeries: [
      {
        name: "Cancelled",
        data: [0, 10000, 18000, 27000, 12000, 30000, 16000, 20000],
      },
      {
        name: "Pending",
        data: [0, 16000, 25000, 41000, 38000, 35000, 30000, 60000],
      },
      {
        name: "Fulfilled",
        data: [0, 18000, 24000, 27000, 43000, 55000, 65000, 90000],
      },
    ],
  },
  {
    id: "month",
    label: "Month",
    totalOrders: "349",
    orderPieChartSeries: [4657, 485, 5730],
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
        name: "Cancelled",
        data: [
          0, 5000, 3000, 7200, 13000, 1000, 7000, 11500, 4000, 2500, 3500, 7500, 3000, 3200, 3500,
          2700, 4000, 4500, 4900, 5000, 4000, 2500, 2700, 3500, 6000, 6250, 6500, 6750, 7000, 7250,
        ],
      },
      {
        name: "Pending",
        data: [
          0, 3000, 6000, 9000, 12000, 15000, 18000, 21000, 24000, 27000, 30000, 33000, 36000, 39000,
          42000, 45000, 48000, 51000, 54000, 57000, 60000, 63000, 66000, 69000, 72000, 75000, 78000,
          81000, 84000, 87000,
        ],
      },
      {
        name: "Fulfilled",
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
    totalOrders: "3495",
    orderPieChartSeries: [353, 3485, 465],
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
        name: "Cancelled",
        data: [
          0, 18000, 24000, 27000, 20000, 30000, 51000, 41000, 43000, 55000, 65000, 90000, 92000,
        ],
      },
      {
        name: "Pending",
        data: [
          0, 16000, 25000, 41000, 38000, 41000, 38000, 43000, 38000, 35000, 30000, 60000, 45000,
        ],
      },
      {
        name: "Fulfilled",
        data: [
          0, 13000, 28000, 33000, 50000, 44000, 35000, 40000, 35000, 39000, 31000, 62000, 49000,
        ],
      },
    ],
  },
];