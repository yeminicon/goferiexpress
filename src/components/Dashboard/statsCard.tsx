import { StatsCardProps } from "@/pages/Dashboard/dashboard.interface";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

function StatsCard({ icon, title, figure }: StatsCardProps): JSX.Element {
  const IconComponent = icon;

  return (
    <Card
      shadow="none"
      className="w-full pl-3 pt-3 pb-10 md:pl-4 border dark:border-dark dark:bg-transparent"
    >
      <CardHeader className="gap-2">
        <div className="w-7 h-7 rounded-full shadow flex items-center justify-center bg-lightest dark:bg-primary">
          <IconComponent className="text-lg text-blue-700 dark:text-white" />
        </div>
        <p className="text-sm font-medium">{title}</p>
      </CardHeader>
      <CardBody>
        <h1 className="text-4xl font-bold text-cyan-950 dark:text-white">{figure}</h1>
      </CardBody>
    </Card>
  );
}

export default StatsCard;
