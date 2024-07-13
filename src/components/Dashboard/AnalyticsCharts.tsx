import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { ApexChartSeriesProps } from "@/pages/Dashboard/dashboard.interface";
import { useTheme } from "next-themes";

interface Props {
  categories: Array<string>;
  dataSeries: Array<ApexChartSeriesProps>;
  colors: Array<string>;
  orderAnalyticsParameters: JSX.Element;
}

function OrderAnalyticsCharts({
  categories,
  dataSeries,
  colors,
  orderAnalyticsParameters,
}: Props): JSX.Element {
  const series: ApexOptions["series"] = dataSeries;

  const { theme } = useTheme();
  const labelColor = theme === "dark" ? "#ffffff" : "#000000";

  const options: ApexOptions = {
    colors: colors,
    chart: {
      height: 350,
      type: "line",
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
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
    legend: {
      show: false,
    },
  };

  return (
    <div className="p-5 border dark:border-dark rounded-2xl">
      <div className="pb-3 flex justify-between">
        <h1 className="text-xl md:text-2xl font-semibold">Orders Analytics</h1>
        {orderAnalyticsParameters}
      </div>
      <div className="overflow-hidden">
        <ReactApexChart options={options} series={series} type="line" height={380} />
      </div>
    </div>
  );
}

export default OrderAnalyticsCharts;
