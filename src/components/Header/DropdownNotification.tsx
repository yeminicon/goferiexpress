import { useState } from "react";
import { MdOutlineClose, MdOutlineNotifications } from "react-icons/md";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Checkbox,
} from "@nextui-org/react";
import { NotificationsItem } from "./NotificationItem";
import { list } from "./list";

export const DropdownNotification = (): JSX.Element => {
  const [openNotifications, setopenNotifications] = useState<boolean>(false);

  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button
          isIconOnly
          aria-label="Notifications"
          className="bg-transparent hover:bg-transparent transition-transform"
        >
          <MdOutlineNotifications className="text-2xl" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-">
        <Card className="max-w-[400px]">
          <CardHeader className="flex flex-col gap-3 w-full items-start">
            <div className="flex justify-between items-center w-full space-x-4">
              <p className="text-base font-medium text-dark dark:text-white">New Notifications</p>
              <Button
                onClick={() => setopenNotifications(!openNotifications)}
                endContent={<MdOutlineClose />}
                className="text-small text-default-500 bg-transparent hover:bg-transparent "
              >
                view all notification
              </Button>
            </div>
            {openNotifications ? (
              <div className="flex gap-2">
                <Checkbox size="sm">
                  <span className="text-xs">Yesterday</span>
                </Checkbox>
                <Checkbox size="sm">
                  <span className="text-xs">Last week</span>
                </Checkbox>
                <Checkbox size="sm">
                  <span className="text-xs">Last month</span>
                </Checkbox>
              </div>
            ) : null}
          </CardHeader>
          <Divider />
          <>
            {list.map((notif, index) => (
              <CardBody className="w-full space-y-2" key={notif.id}>
                <NotificationsItem
                  link={notif.link}
                  timeStamp={notif.timeStamp}
                  title={notif.title}
                />
                {index !== list.length - 1 && <Divider />}
              </CardBody>
            ))}
          </>
        </Card>
      </PopoverContent>
    </Popover>
  );
};
