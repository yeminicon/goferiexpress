import { FiUserPlus } from "react-icons/fi";
import { PiUsers } from "react-icons/pi";
import { CartItemsTableProps, UserActivityTableProps, UsersTableProps } from "./users.interface";
import CountryFlag from "@/assets/images/nigerian-flag.jpg";
import RedShoe from "@/assets/images/red-shoe.png";

export const allUsersTable: Array<UsersTableProps> = [
  {
    profileImage: "https://bit.ly/prosper-baba",
    name: "Prosper Baba",
    id: "TJUY768490",
    userType: "Diamond-VIP",
    email: "productuser@gmail.com",
    gender: "Male",
    status: "Time: 13:00 - Date: 02/07",
    countryFlag: CountryFlag,
  },
  {
    profileImage: "https://bit.ly/dan-abramov",
    name: "Dan Abrahmov",
    id: "TJUY768490",
    userType: "Non-VIP",
    email: "productuser@gmail.com",
    gender: "Male",
    status: "Time: 13:00 - Date: 02/07",
    countryFlag: CountryFlag,
  },
  {
    profileImage: "https://bit.ly/kent-c-dodds",
    name: "Kent Dodds",
    id: "TJUY768490",
    userType: "Gold-VIP",
    email: "productuser@gmail.com",
    gender: "Male",
    status: "Active",
    countryFlag: CountryFlag,
  },
  {
    profileImage: "https://bit.ly/ryan-florence",
    name: "Ryan Florence",
    id: "TJUY768490",
    userType: "Diamond-VIP",
    email: "productuser@gmail.com",
    gender: "Male",
    status: "Active",
    countryFlag: CountryFlag,
  },
  {
    profileImage: "https://bit.ly/prosper-baba",
    name: "Prosper Otemuyiwa",
    id: "TJUY768490",
    userType: "Diamond-VIP",
    email: "productuser@gmail.com",
    gender: "Male",
    status: "Active",
    countryFlag: CountryFlag,
  },
  {
    profileImage: "https://bit.ly/code-beast",
    name: "Christian Nwamba",
    id: "TJUY768490",
    userType: "Diamond-VIP",
    email: "productuser@gmail.com",
    gender: "Male",
    status: "Active",
    countryFlag: CountryFlag,
  },
  {
    profileImage: "https://bit.ly/sage-adebayo",
    name: "Segun Adebayo",
    id: "TJUY768490",
    userType: "Diamond-VIP",
    email: "productuser@gmail.com",
    gender: "Male",
    status: "Active",
    countryFlag: CountryFlag,
  },
  {
    profileImage: "https://bit.ly/code-beast",
    name: "Christian Nwamba",
    id: "TJUY768490",
    userType: "Diamond-VIP",
    email: "productuser@gmail.com",
    gender: "Male",
    status: "Active",
    countryFlag: CountryFlag,
  },
  {
    profileImage: "https://bit.ly/code-beast",
    name: "Christian Nwamba",
    id: "TJUY768490",
    userType: "Diamond-VIP",
    email: "productuser@gmail.com",
    gender: "Male",
    status: "Active",
    countryFlag: CountryFlag,
  },
  {
    profileImage: "https://bit.ly/code-beast",
    name: "Christian Nwamba",
    id: "TJUY768490",
    userType: "Diamond-VIP",
    email: "productuser@gmail.com",
    gender: "Male",
    status: "Active",
    countryFlag: CountryFlag,
  },
];

export const cartItemsTableData: Array<CartItemsTableProps> = [
  {
    productImage: RedShoe,
    productName: "Red shoe",
    vendorName: "Nike",
    addedOn: "3:00 - Today",
    quantity: 100,
    price: "$100",
  },
  {
    productImage: RedShoe,
    productName: "Beauty lotion",
    vendorName: "Dettol",
    addedOn: "4:00 - 09/23",
    quantity: 100,
    price: "$100",
  },
  {
    productImage: RedShoe,
    productName: "White watch",
    vendorName: "Apple",
    addedOn: "4:00 - 09/23",
    quantity: 100,
    price: "$100",
  },
  {
    productImage: RedShoe,
    productName: "lotion",
    vendorName: "Dove",
    addedOn: "4:00 - 09/23",
    quantity: 100,
    price: "$100",
  },
  {
    productImage: RedShoe,
    productName: "lotion",
    vendorName: "Gap",
    addedOn: "4:00 - 09/23",
    quantity: 100,
    price: "$100",
  },
  {
    productImage: RedShoe,
    productName: "Beauty lotion",
    vendorName: "Pipe",
    addedOn: "4:00 - 09/23",
    quantity: 100,
    price: "$100",
  },
];

export const userActivityTableData: Array<UserActivityTableProps> = [
  {
    activity: "Login",
    date: "12:30am -23/07/2024",
  },
  {
    activity: "Sign in",
    date: "12:30am -23/07/2024",
  },
  {
    activity: "Password change",
    date: "12:30am -23/07/2024",
  },
  {
    activity: "Profile Update",
    date: "12:30am -23/07/2024",
  },
  {
    activity: "Created Account",
    date: "12:30am -23/07/2024",
  },
];

export const orderReceiptData = [
  {
    orderId: "ID462UHDBSNSLSLDL",
    orderStatus: "Pending",
    orderDate: "23:00 - 23/09",
  },
  {
    orderId: "ID462UHDBSNSLSLDL",
    orderStatus: "Cancelled",
    orderDate: "23:00 - 23/09",
  },
  {
    orderId: "ID462UHDBSNSLSLDL",
    orderStatus: "Fulfilled",
    orderDate: "23:00 - 23/09",
  },
  {
    orderId: "ID462UHDBSNSLSLDL",
    orderStatus: "Pending",
    orderDate: "23:00 - 23/09",
  },
  {
    orderId: "ID462UHDBSNSLSLDL",
    orderStatus: "Pending",
    orderDate: "23:00 - 23/09",
  },
  {
    orderId: "ID462UHDBSNSLSLDL",
    orderStatus: "Pending",
    orderDate: "23:00 - 23/09",
  },
];

export const userDateTab = [
  {
    id: "today",
    label: "Today",
    statCardData: [
      {
        title: "Total Users",
        figure: "67,088",
        icon: PiUsers,
      },
      {
        title: "New Users",
        figure: "12",
        icon: FiUserPlus,
      },
    ],
    usersAnalyticsCategories: [
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
      "00:00",
    ],
    usersAnalyticsDataSeries: [
      {
        name: "Total users",
        data: [
          0, 18000, 24000, 27000, 20000, 30000, 51000, 41000, 43000, 55000, 65000, 90000, 92000,
          98000,
        ],
      },
    ],
  },
  {
    id: "week",
    label: "Week",
    statCardData: [
      {
        title: "Total Users",
        figure: "68,188",
        icon: PiUsers,
      },
      {
        title: "New Users",
        figure: "34",
        icon: FiUserPlus,
      },
    ],
    usersAnalyticsCategories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    usersAnalyticsDataSeries: [
      {
        name: "Total users",
        data: [0, 18000, 34000, 57000, 23000, 65000, 85000, 95000],
      },
    ],
  },
  {
    id: "month",
    label: "Month",
    statCardData: [
      {
        title: "Total Users",
        figure: "79,088",
        icon: PiUsers,
      },
      {
        title: "New Users",
        figure: "45",
        icon: FiUserPlus,
      },
    ],
    usersAnalyticsCategories: [
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
    usersAnalyticsDataSeries: [
      {
        name: "Total users",
        data: [
          0, 3000, 6000, 9000, 12000, 15000, 18000, 21000, 24000, 27000, 30000, 33000, 36000, 39000,
          42000, 45000, 48000, 51000, 54000, 57000, 60000, 63000, 66000, 69000, 72000, 75000, 78000,
          81000, 84000, 87000,
        ],
      },
    ],
  },
  {
    id: "year",
    label: "Year",
    statCardData: [
      {
        title: "Total Users",
        figure: "120,004",
        icon: PiUsers,
      },
      {
        title: "New Users",
        figure: "990",
        icon: FiUserPlus,
      },
    ],
    usersAnalyticsCategories: [
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
    ],
    usersAnalyticsDataSeries: [
      {
        name: "Total users",
        data: [
          0, 18000, 24000, 27000, 20000, 30000, 51000, 41000, 43000, 55000, 65000, 90000, 95000,
        ],
      },
    ],
  },
];

export const userPersonalInformation = [
  {
    label: "First name",
    value: "Richard",
  },
  {
    label: "Last name",
    value: "Musty",
  },
  {
    label: "Phone Number",
    value: "+234 90 7979 5070",
  },
  {
    label: "Email",
    value: "Musty@google.com",
  },
];

export const userMoreInformation = [
  {
    label: "Gender",
    value: "Male",
  },
  {
    label: "Last active",
    value: "Time: 13:00 - Date: 02/07",
  },
  {
    label: "Post code",
    value: "12345678910",
  },
  {
    label: "Delivery address",
    value: "2 JABI CLOSE off LA WAY",
  },
];
