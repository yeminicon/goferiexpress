import { ApexChartSeriesProps } from "../Dashboard/dashboard.interface";

export interface UsersTableProps {
  profileImage: string;
  name: string;
  id: string;
  userType: string;
  email: string;
  gender: string;
  status: string;
  countryFlag: string;
}

export interface CartItemsTableProps {
  productName: string;
  productImage: string;
  vendorName: string;
  addedOn: string;
  quantity: number;
  price: string;
}

export interface UserActivityTableProps {
  activity: string;
  date: string;
}

export interface CustomModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
}

export interface CustomApexProps {
  categories: Array<string>;
  dataSeries: Array<ApexChartSeriesProps>;
}
