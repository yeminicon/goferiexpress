import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";

function QuotationRequestCard(): JSX.Element {
  const series: ApexOptions["series"] = [90, 80, 70];

  const total = series.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const average = total / 3;

  const { theme } = useTheme();
  const labelColor = theme === "dark" ? "#ffffff" : "#000000";

  const options: ApexOptions = {
    colors: ["#4AA84E", "#5872BA", "#FBB102"],
    chart: {
      height: 345,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "20px",
          },
          value: {
            fontSize: "28px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: () => `${average}`,
            color: labelColor,
          },
        },
      },
    },
    labels: ["Big Vendor", "Mid Vendor", "Top Vendor"],
  };

  return (
    <div className="w-full border dark:border-dark rounded-2xl py-4 flex flex-col justify-between items-center h-[30rem]">
      <div className="flex flex-col items-center">
        <h1 className="font-medium text-xl">Quotation Request</h1>
        <div className="flex flex-col items-start">
          <div>
            <ReactApexChart options={options} series={series} type="radialBar" height={345} />
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <p className="text-xs font-normal">Top Vendor: 1</p>
            </div>
            <div className="flex gap-2 items-center mt-1">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="text-xs font-normal">Mid Vendor: 3</p>
            </div>
            <div className="flex gap-2 items-center mt-1">
              <div className="w-2 h-2 bg-green rounded-full"></div>
              <p className="text-xs font-normal">Big Vendor: 6</p>
            </div>
          </div>
        </div>
      </div>
      <div onClick={() => console.log("Clicked")} className="cursor-pointer">
        <p className="text-primary-300 text-xs font-normal">Open quotation request</p>
      </div>
    </div>
  );
}

export default QuotationRequestCard;
