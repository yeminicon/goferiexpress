import { ProductsProps } from "./products.interface";
import ProductOverview from "@/components/Products/productOverview";
import ProductDetails from "@/components/Products/productDetails";
import ProductsImagesDisplay from "@/components/Products/productsImagesDisplay";
import ProductAttributes from "@/components/Products/productAttributes";
import ProductPricing from "@/components/Products/productPricing";
import SuppliersDetails from "@/components/Products/suppliersDetails";
import ProductAUPricing from "@/components/Products/productAUPricing";
import ProductNLPricing from "@/components/Products/productNLPricing";
import { HiOutlineViewGrid } from "react-icons/hi";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import ProductDisplayGridView from "@/components/Products/productDisplayGridView";
import ProductDisplayListView from "@/components/Products/productDisplayListView";
import DeclinedProductsPageContent from "@/components/Products/declinedProductsPageContent";
import NewProductsPageContent from "@/components/Products/newProductsPageContent";

export const products: Array<Omit<ProductsProps, "openModal">> = [
  {
    id: "12345678",
    productName: "Blue T-shirt",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    amount: 19.99,
    vendorName: "Fashion Hub",
    vendorProfilePicture: "https://bit.ly/prosper-baba",
  },
  {
    id: "23456789",
    productName: "Black Jeans",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    amount: 39.99,
    vendorName: "Denim Style",
    vendorProfilePicture: "https://bit.ly/prosper-baba",
  },
  {
    id: "34567890",
    productName: "Running Shoes",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    amount: 59.99,
    vendorName: "Sportify",
    vendorProfilePicture: "https://bit.ly/prosper-baba",
  },
  {
    id: "45678901",
    productName: "Leather Jacket",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    amount: 99.99,
    vendorName: "Leatherworks",
    vendorProfilePicture: "https://bit.ly/prosper-baba",
  },
  {
    id: "56789012",
    productName: "Smart Watch",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    amount: 129.99,
    vendorName: "TechZone",
    vendorProfilePicture: "https://bit.ly/prosper-baba",
  },
  {
    id: "67890123",
    productName: "Designer Sunglasses",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    amount: 79.99,
    vendorName: "SunnySide",
    vendorProfilePicture: "https://bit.ly/prosper-baba",
  },
  {
    id: "78901234",
    productName: "Wireless Headphones",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    amount: 49.99,
    vendorName: "SoundSpace",
    vendorProfilePicture: "https://bit.ly/prosper-baba",
  },
  {
    id: "89012345",
    productName: "Backpack",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    amount: 29.99,
    vendorName: "Adventure Gear",
    vendorProfilePicture: "https://bit.ly/prosper-baba",
  },
  {
    id: "90123456",
    productName: "Coffee Maker",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    amount: 79.99,
    vendorName: "Brew Master",
    vendorProfilePicture: "https://bit.ly/prosper-baba",
  },
  {
    id: "01234567",
    productName: "Gaming Mouse",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    amount: 39.99,
    vendorName: "GameTech",
    vendorProfilePicture: "https://bit.ly/prosper-baba",
  },
  {
    id: "01234557",
    productName: "Gaming Mouse",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    amount: 39.99,
    vendorName: "GameTech",
    vendorProfilePicture: "https://bit.ly/prosper-baba",
  },
  {
    id: "01234569",
    productName: "Gaming Mouse",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    amount: 39.99,
    vendorName: "GameTech",
    vendorProfilePicture: "https://bit.ly/prosper-baba",
  },
];

export const selectProductAlphabeticallyOptions = [
  {
    label: "Alphabetical (A-Z)",
  },
  {
    label: "Alphabetical (Z-A)",
  },
  {
    label: "Price (Low-High)",
  },
  {
    label: "Price (High-Low)",
  },
  {
    label: "Quantity (High-Low)",
  },
  {
    label: "Quantity (Low-High)",
  },
  {
    label: "Recently added",
  },
];

export const productDetailsTabs = [
  {
    id: "productOverview",
    label: "Product overview",
    content: ProductOverview,
  },
  {
    id: "details",
    label: "Details",
    content: ProductDetails,
  },
  {
    id: "image",
    label: "Image",
    content: ProductsImagesDisplay,
  },
  {
    id: "productAttribute",
    label: "Product Attribute",
    content: ProductAttributes,
  },
  {
    id: "pricing",
    label: "Pricing",
    content: ProductPricing,
  },
  {
    id: "suppliersDetails",
    label: "Suppliers details",
    content: SuppliersDetails,
  },
];

export const productColors = [
  {
    color: "#FBB102",
  },
  {
    color: "#FF5722",
  },
  {
    color: "#313C59",
  },
  {
    color: "#BC8E04",
  },
  {
    color: "#4AA84E",
  },
];

export const productDetailsTableData = [
  {
    color: "Yellow",
    hexCode: "#FBB102",
    inStock: "00",
    nextShipment: "Due Date: 02/07 - Stock: 50",
  },
  {
    color: "Blue",
    hexCode: "#313C59",
    inStock: "100",
    nextShipment: "Due Date: 02/07 - Stock: 50",
  },
  {
    color: "Black",
    hexCode: "#000000",
    inStock: "100",
    nextShipment: "Due Date: 02/07 - Stock: 50",
  },
  {
    color: "White",
    hexCode: "#FFFFFF",
    inStock: "00",
    nextShipment: "Due Date: 02/07 - Stock: 50",
  },
  {
    color: "Green",
    hexCode: "#4AA84E",
    inStock: "100",
    nextShipment: "Due Date: 02/07 - Stock: 50",
  },
  {
    color: "Red",
    hexCode: "#FF5722",
    inStock: "00",
    nextShipment: "Due Date: 02/07 - Stock: 50",
  },
  {
    color: "Brown",
    hexCode: "#BC8E04",
    inStock: "00",
    nextShipment: "Due Date: 02/07 - Stock: 50",
  },
];

export const productAttributeTableData = [
  {
    productAttribute: "Brand",
    details: "Brand Name",
  },
  {
    productAttribute: "Size",
    details: "Available Sizes: S, M, L, XL, XXL, etc.",
  },
  {
    productAttribute: "Color",
    details: "Available Color: Red, Blue, White, etc.",
  },
  {
    productAttribute: "Material",
    details: "Fabric Material: Cotton, Polyester, etc.",
  },
  {
    productAttribute: "Sleeve Type",
    details: "Short Sleeve, Long Sleeve, etc.",
  },
  {
    productAttribute: "Collar Type",
    details: "e.g., Round Neck, V-Neck, etc.",
  },
  {
    productAttribute: "Pattern",
    details: "e.g., Striped, Solid, Plaid etc.",
  },
  {
    productAttribute: "Stock Location",
    details: "Australia",
  },
  {
    productAttribute: "Attributes",
    details: [
      {
        attribute: "Theme",
        spec: [
          {
            title: "Easter",
          },
          {
            title: "Legal",
          },
        ],
      },
      {
        attribute: "Sports",
        spec: [
          {
            title: "Sports",
          },
          {
            title: "Boxing",
          },
        ],
      },
      {
        attribute: "Material",
        spec: [
          {
            title: "Acrylic",
          },
        ],
      },
      {
        attribute: "Eco factor",
        spec: [
          {
            title: "Bio Degradable",
          },
        ],
      },
    ],
  },
];

export const suppliersDetailsTableData = [
  {
    supplySpecification: "Collection Name",
    details: "Technology",
  },
  {
    supplySpecification: "Materials",
    details: "Wood and wool",
  },
  {
    supplySpecification: "Item Size",
    details: "12kg",
  },
  {
    supplySpecification: "Decoration Area",
    details: "Top right",
  },
  {
    supplySpecification: "Carton Dimension",
    details: "Width (7m) x Length (5m) x Depth (4m)",
  },
  {
    supplySpecification: "Carton Weight",
    details: "1kg",
  },
  {
    supplySpecification: "Decoration Type",
    details: "Full x Mid x Small",
  },
  {
    supplySpecification: "Keywords",
    details: "Elegant, Cool, Smart",
  },
  {
    supplySpecification: "Freight Description",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, ea harum minima, voluptatum unde soluta voluptatibus, alias illo sunt incidunt beatae ad at iure. Debitis eius voluptatibus at neque cumque!",
  },
];

export const ProductAUPricingTableData = [
  {
    quantity: "Local black Stock",
    50: "$100",
    100: "$100",
    250: "$150",
    500: "$110",
    1000: "$110",
    2500: "$110",
    5000: "$110",
    updatedAt: "2-06-2024",
  },
  {
    quantity: "24Hrs Print Par Col/Pos",
    50: "$100",
    100: "$100",
    250: "$150",
    500: "$110",
    1000: "$110",
    2500: "$110",
    5000: "$110",
    updatedAt: "2-06-2024",
  },
  {
    quantity: "3Days Print Par Col/Pos",
    50: "$100",
    100: "$100",
    250: "$150",
    500: "$110",
    1000: "$110",
    2500: "$110",
    5000: "$110",
    updatedAt: "2-06-2024",
  },
  {
    quantity: "7Days Print Par Col/Pos",
    50: "$100",
    100: "$100",
    250: "$150",
    500: "$110",
    1000: "$110",
    2500: "$110",
    5000: "$110",
    updatedAt: "2-06-2024",
  },
  {
    quantity: "24Hrs Print Par Col/Pos",
    50: "$100",
    100: "$100",
    250: "$150",
    500: "$110",
    1000: "$110",
    2500: "$110",
    5000: "$110",
    updatedAt: "2-06-2024",
  },
  {
    quantity: "24Hrs Print Par Col/Pos",
    50: "$100",
    100: "$100",
    250: "$150",
    500: "$110",
    1000: "$110",
    2500: "$110",
    5000: "$110",
    updatedAt: "2-06-2024",
  },
  {
    quantity: "24Hrs Print Par Col/Pos",
    50: "$100",
    100: "$100",
    250: "$150",
    500: "$110",
    1000: "$110",
    2500: "$110",
    5000: "$110",
    updatedAt: "2-06-2024",
  },
  {
    quantity: "Local black Stock",
    50: "$100",
    100: "$100",
    250: "$150",
    500: "$110",
    1000: "$110",
    2500: "$110",
    5000: "$110",
    updatedAt: "2-06-2024",
  },
];

export const productPricingTabs = [
  {
    id: "AUPricing",
    label: "AU Pricing",
    content: ProductAUPricing,
  },
  {
    id: "NLPricing",
    label: "NL Pricing",
    content: ProductNLPricing,
  },
];

export const productCardsTabs = [
  {
    id: "gridView",
    label: "Grid view",
    content: ProductDisplayGridView,
    icon: HiOutlineViewGrid,
  },
  {
    id: "listView",
    label: "List view",
    content: ProductDisplayListView,
    icon: MdOutlineFormatListBulleted,
  },
];

export const accordionItems = [
  {
    title: "24-hours dispatch pricing",
  },
  {
    title: "3-day dispatch pricing",
  },
  {
    title: "5-day dispatch pricing",
  },
  {
    title: "7-day dispatch pricing",
  },
  {
    title: "Items with details",
  },
  {
    title: "Items with description",
  },
  {
    title: "Discounted products",
  },
  {
    title: "Australian Region",
  },
  {
    title: "New Zealand Region",
  },
  {
    title: "Custom items",
  },
  {
    title: "Items with prices (8)",
  },
  {
    title: "Items with stock check (8)",
  },
  {
    title: "Items from API suppliers (8)",
  },
  {
    title: "New items (Last 30 days)",
  },
  {
    title: "Expired Discount",
  },
  {
    title: "Discounts Expiring",
  },
  {
    title: "Non-discounted items (8)",
  },
];

export const newProductsTabs = [
  {
    id: "newProducts",
    label: "New Products",
    content: NewProductsPageContent,
  },
  {
    id: "declined",
    label: "Declined",
    content: DeclinedProductsPageContent,
  },
];

export const allProductsSubCategories = [
  {
    category: "Australian made products",
  },
  {
    category: "Shoes",
  },
  {
    category: "Lotion",
  },
  {
    category: "Watch",
  },
  {
    category: "Make-up",
  },
  {
    category: "Balloons",
  },
  {
    category: "Usb flash",
  },
  {
    category: "Shoes",
  },
  {
    category: "Caps and Hats",
  },
  {
    category: "Gift set",
  },
  {
    category: "Cups",
  },
  {
    category: "Drinks",
  },
];

export const productBasicInfoDetails = [
  {
    label: "Product name",
    value: "Brown Toms",
  },
  {
    label: "Vendor name",
    value: "Big Vendor",
  },
  {
    label: "Category- Subcategory",
    value: "Shoes - Wooden",
  },
  {
    label: "Product Code",
    value: "#1234578947854949",
  },
];

export const productMoreInfoDetails = [
  {
    label: "Promo code",
    value: "#1234578947854949",
  },
  {
    label: "Data Source",
    value: "API",
  },
  {
    label: "Date Added",
    value: "Date: 02/07",
  },
  {
    label: "Discontinue time",
    value: "None - Time: 13:00 - Date: 02/07",
  },
  {
    label: "Last update",
    value: "Date: 01/07",
  },
];
