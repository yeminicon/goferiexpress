import { IconType } from "react-icons";

export interface StatsCardProps {
  icon: IconType;
  title: string;
  figure: string;
}

export interface TableStatsOverview {
  initial: string;
  title: string;
  total: number;
  progress: string;
}

export interface TopSellingProductProps {
  image: string;
  productTitle: string;
  productType: string;
  vendor: string;
  status: string;
  revenue: string;
}

export interface ApexChartSeriesProps {
  name: string;
  data: Array<number>;
}
