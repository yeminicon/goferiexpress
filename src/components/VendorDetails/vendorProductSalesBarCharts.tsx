import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import { ApexChartSeriesProps } from "@/pages/Dashboard/dashboard.interface";

interface Props {
  categories: Array<string>;
  dataSeries: Array<ApexChartSeriesProps>;
}

function VendorProductSalesBarCharts({ categories, dataSeries }: Props): JSX.Element {
  const { theme } = useTheme();
  const labelColor = theme === "dark" ? "#ffffff" : "#000000";

  const series: ApexOptions["series"] = dataSeries;

  const options: ApexOptions = {
    colors: ["#5872BA"],
    chart: {
      id: "basic-bar",
      height: 330,
      type: "bar",
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          colors: labelColor,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
        },
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div className="p-5 border dark:border-dark rounded-2xl mt-14 md:mt-2 lg:mt-0">
      <div className="pb-3 flex justify-between">
        <h1 className="text-xl md:text-2xl font-semibold">Product sells</h1>
        <div className="flex items-center gap-6 text-sm font-medium">
          <p>
            Average daily sells: <span className="text-primary">120</span>
          </p>
          <p>
            Sold Products: <span className="text-primary">120</span>
          </p>
        </div>
      </div>
      <div>
        <ReactApexChart options={options} series={series} type="bar" height={330} />
      </div>
    </div>
  );
}

export default VendorProductSalesBarCharts;
