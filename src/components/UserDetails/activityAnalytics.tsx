import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";

const series: ApexOptions["series"] = [
  {
    name: "Duration",
    data: [6, 10, 3, 2.5, 2, 22, 13, 7, 8, 9, 10, 10],
  },
];

function ActivityAnalytics(): JSX.Element {
  const { theme } = useTheme();
  const labelColor = theme === "dark" ? "#ffffff" : "#000000";

  const options: ApexOptions = {
    colors: ["#5872BA"],
    chart: {
      height: 330,
      type: "bar",
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
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
        <h1 className="text-xl md:text-xl font-semibold">Activity Analytics</h1>
        <p className="text-base font-normal">Average daily duration: 3hr</p>
      </div>
      <div>
        <ReactApexChart options={options} series={series} type="bar" height={330} />
      </div>
    </div>
  );
}

export default ActivityAnalytics;
