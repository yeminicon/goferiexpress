import { Link as RouterLink } from "react-router-dom";
import { Link, LinkProps } from "@nextui-org/react";
import { IconType } from "react-icons";
import { MdArrowOutward } from "react-icons/md";

type UserDropdownLinkT = {
  icon: IconType;
  title: string;
  pathname: string;
  hasSecondIcon?: boolean;
} & LinkProps;
export const UserDropdownLink = (props: UserDropdownLinkT): JSX.Element => {
  const Icon = props.icon;

  return (
    <div className="flex items-center space-x-7 py-1 px-3">
      <div className="flex items-center space-x-2">
        {Icon && <Icon className="text-dark dark:text-white text-xl" />}
        <Link
          as={RouterLink}
          href={props.pathname || "#"}
          className="text-base font-medium text-dark dark:text-white"
          {...props}
        >
          {props.title}
        </Link>
      </div>
      {props.hasSecondIcon && <MdArrowOutward className="text-dark dark:text-white text-xl" />}
    </div>
  );
};
