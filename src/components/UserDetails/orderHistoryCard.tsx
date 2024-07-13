import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const series: ApexOptions["series"] = [200, 300, 400];
const options: ApexOptions = {
  colors: ["#5872BA", "#4AA84E", "#FBB102"],
  chart: {
    type: "donut",
    toolbar: { show: false },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 300,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

function OrderHistoryCard(): JSX.Element {
  return (
    <div className="w-full border dark:border-dark rounded-2xl py-4 flex flex-col justify-between items-center h-[30rem]">
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-medium text-xl">Order History</h1>
        <div className="flex flex-col gap-4 items-start">
          <div>
            <ReactApexChart options={options} series={series} type="donut" height={305} />
          </div>
          <div>
            <div className="flex gap-2 items-center mt-1">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <p className="text-xs font-normal">Cancelled Orders: 400</p>
            </div>
            <div className="flex gap-2 items-center mt-1">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="text-xs font-normal">Pending Delivery: 200</p>
            </div>
            <div className="flex gap-2 items-center mt-1">
              <div className="w-2 h-2 bg-green rounded-full"></div>
              <p className="text-xs font-normal">Completed Orders: 300</p>
            </div>
          </div>
        </div>
      </div>
      <div onClick={() => console.log("Clicked")} className="cursor-pointer">
        <p className="text-primary-300 text-xs font-normal">Open order history</p>
      </div>
    </div>
  );
}

export default OrderHistoryCard;
