import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { CustomApexProps } from "@/pages/Users/users.interface";
import { useTheme } from "next-themes";

function UsersAnalyticsChart({ categories, dataSeries }: CustomApexProps): JSX.Element {
  const series: ApexOptions["series"] = dataSeries;

  const { theme } = useTheme();
  const labelColor = theme === "dark" ? "#ffffff" : "#000000";

  const options: ApexOptions = {
    colors: ["#5872BA"],
    chart: {
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
    <div className="p-5 border dark:border-dark rounded-2xl shadow">
      <div className="pb-3 flex justify-between">
        <h1 className="text-xl md:text-2xl font-semibold">User Analytics</h1>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <p className="text-xs font-medium">Total users</p>
        </div>
      </div>
      <div className="overflow-hidden">
        <ReactApexChart options={options} series={series} type="line" height={380} />
      </div>
    </div>
  );
}

export default UsersAnalyticsChart;
