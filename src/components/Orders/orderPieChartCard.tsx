import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { FaShuttleVan } from "react-icons/fa";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface Props {
  dataSeries: Array<number>;
}

const options: ApexOptions = {
  colors: ["#FF5722", "#4AA84E", "#BC8E04"],
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
          width: 100,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

function OrderPieChartCard({ dataSeries }: Props): JSX.Element {
  const series: ApexOptions["series"] = dataSeries;

  return (
    <Card
      shadow="none"
      className="w-full p-4 pl-3 pt-3 pb-10 md:pl-4 border dark:border-dark dark:bg-transparent"
    >
      <CardHeader className="gap-2">
        <div className="w-7 h-7 rounded-full shadow flex items-center justify-center dark:bg-primary">
          <FaShuttleVan className="text-lg text-blue-700 dark:text-white" />
        </div>
        <p className="text-sm font-medium">Status</p>
      </CardHeader>
      <CardBody>
        <div className="flex items-center gap-4 h-14">
          <div className="md:w-16">
            <ReactApexChart options={options} series={series} type="donut" height={100} />
          </div>
          <div>
            <div className="flex gap-2 items-center mt-1">
              <div className="w-2 h-2 bg-red rounded-full"></div>
              <p className="text-xs font-normal">Cancelled Orders: {dataSeries[0]}</p>
            </div>
            <div className="flex gap-2 items-center mt-1">
              <div className="w-2 h-2 bg-yellow-700 rounded-full"></div>
              <p className="text-xs font-normal">Pending Delivery: {dataSeries[2]}</p>
            </div>
            <div className="flex gap-2 items-center mt-1">
              <div className="w-2 h-2 bg-success-600 rounded-full"></div>
              <p className="text-xs font-normal">Completed Orders: {dataSeries[1]}</p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default OrderPieChartCard;
