import { VendorsProductTableProps, VendorsTableProps } from "./vendors.interface";
import CountryFlag from "@/assets/images/nigerian-flag.jpg";
import RedShoe from "@/assets/images/red-shoe.png";

export const allVendorsTable: Array<VendorsTableProps> = [
  {
    profileImage: "https://bit.ly/prosper-baba",
    name: "Prosper Baba",
    id: "TJUY768490",
    email: "productuser@gmail.com",
    timeAdded: "Time: 13:00 - Date: 02/07",
    countryFlag: CountryFlag,
  },
  {
    profileImage: "https://bit.ly/dan-abramov",
    name: "Dan Abrahmov",
    id: "TJUY768490",
    email: "productuser@gmail.com",
    timeAdded: "Time: 13:00 - Date: 02/07",
    countryFlag: CountryFlag,
  },
  {
    profileImage: "https://bit.ly/kent-c-dodds",
    name: "Kent Dodds",
    id: "TJUY768490",
    email: "productuser@gmail.com",
    timeAdded: "Time: 13:00 - Date: 02/07",
    countryFlag: CountryFlag,
  },
  {
    profileImage: "https://bit.ly/ryan-florence",
    name: "Ryan Florence",
    id: "TJUY768490",
    email: "productuser@gmail.com",
    timeAdded: "Time: 13:00 - Date: 02/07",
    countryFlag: CountryFlag,
  },
  {
    profileImage: "https://bit.ly/prosper-baba",
    name: "Prosper Otemuyiwa",
    id: "TJUY768490",
    email: "productuser@gmail.com",
    timeAdded: "Time: 13:00 - Date: 02/07",
    countryFlag: CountryFlag,
  },
  {
    profileImage: "https://bit.ly/sage-adebayo",
    name: "Segun Adebayo",
    id: "TJUY768490",
    email: "productuser@gmail.com",
    timeAdded: "Time: 13:00 - Date: 02/07",
    countryFlag: CountryFlag,
  },
  {
    profileImage: "https://bit.ly/code-beast",
    name: "Christian Nwamba",
    id: "TJUY768490",
    email: "productuser@gmail.com",
    timeAdded: "Time: 13:00 - Date: 02/07",
    countryFlag: CountryFlag,
  },
];

export const vendorProductTableData: Array<VendorsProductTableProps> = [
  {
    productImage: RedShoe,
    productName: "Heather Ford",
    categories: "Caps and Hats",
    status: "Best buy",
  },
  {
    productImage: RedShoe,
    productName: "Heather Ford",
    categories: "Gift sets",
    status: "On Sales",
  },
  {
    productImage: RedShoe,
    productName: "Heather Ford",
    categories: "Cups",
    status: "Just released",
  },
  {
    productImage: RedShoe,
    productName: "Heather Ford",
    categories: "Drinks",
    status: "New",
  },
  {
    productImage: RedShoe,
    productName: "Heather Ford",
    categories: "Usb flash",
    status: "Just released",
  },
  {
    productImage: RedShoe,
    productName: "Heather Ford",
    categories: "Balloons",
    status: "Just released",
  },
  {
    productImage: RedShoe,
    productName: "Heather Ford",
    categories: "Australian made p",
    status: "Just released",
  },
  {
    productImage: RedShoe,
    productName: "Heather Ford",
    categories: "Drinks",
    status: "Just released",
  },
  {
    productImage: RedShoe,
    productName: "Heather Ford",
    categories: "Bags",
    status: "Just released",
  },
  {
    productImage: RedShoe,
    productName: "Heather Ford",
    categories: "Drinks",
    status: "Just released",
  },
  {
    productImage: RedShoe,
    productName: "Heather Ford",
    categories: "Bags",
    status: "Just released",
  },
];

export const vendorDetailsPageTab = [
  {
    id: "vendorInformation",
    label: "Gofer Information",
    //  content: VendorInformation,
  },
  {
    id: "vendorProducts",
    label: "Gofer Products",
    //  content: VendorProducts,
  },
];

export const vendorProductSaleDateTab = [
  {
    id: "today",
    label: "Today",
    vendorProductSalesCategories: [
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
    vendorProductSalesDataSeries: [
      {
        name: "Sold products",
        data: [5, 10, 3, 2, 1, 13, 8, 7, 7, 8, 9, 22],
      },
    ],
  },
  {
    id: "week",
    label: "Week",
    vendorProductSalesCategories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    vendorProductSalesDataSeries: [
      {
        name: "Sold products",
        data: [8, 20, 18, 15.5, 17, 25, 15],
      },
    ],
  },
  {
    id: "month",
    label: "Month",
    vendorProductSalesCategories: [
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
    vendorProductSalesDataSeries: [
      {
        name: "Sold products",
        data: [
          250, 620, 558, 480.5, 527, 775, 465, 250, 620, 558, 480.5, 527, 775, 465, 250, 620, 558,
          480.5, 527, 775, 465, 250, 620, 558, 480.5, 527, 775, 465, 630, 920,
        ],
      },
    ],
  },
  {
    id: "year",
    label: "Year",
    vendorProductSalesCategories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    vendorProductSalesDataSeries: [
      {
        name: "Sold products",
        data: [3000, 7440, 6696, 5766, 6324, 9300, 5580, 3000, 7440, 6696, 5766, 6324, 9300],
      },
    ],
  },
];

export const vendorInformationData = [
  {
    label: "Amount of Product",
    value: "12,678",
  },
  {
    label: "Email",
    value: "Vendor@gmail.com",
  },
  {
    label: "Phone Number",
    value: "+234 90 7979 5070",
  },
];
