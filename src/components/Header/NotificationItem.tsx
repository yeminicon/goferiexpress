import { Link as RouterLink } from "react-router-dom";
import { Card, Link, Image } from "@nextui-org/react";

export type NotificationsItemT = {
  id?: number;
  title: string;
  link: string;
  timeStamp: string;
};

export const NotificationsItem = (props: NotificationsItemT) => {
  return (
    <Card
      className="bg-transparent p-0"
      shadow="none"
      isPressable
      isHoverable
      onPress={() => console.log("item pressed")}
    >
      <div className="w-full">
        <div className="flex gap-3">
          <Image
            className="rounded-full"
            alt=""
            radius="none"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            height={40}
            width={40}
          />
          <div className="flex flex-col space-y-1 items-start">
            <p className="text-xs text-medium text-dark">{props.title}</p>
            <p className="text-xs text-medium font-medium">{props.timeStamp} </p>
            <Link as={RouterLink} to={props.link} className="text-xs font-medium text-primary">
              Review
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};
