import { Button, Card, CardBody, CardFooter, Input } from "@nextui-org/react";
import { FiClock, FiStar } from "react-icons/fi";
import { IoDiamondOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { SidebarRoutes } from "@/types/routes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProfitSettingSchema } from "@/schema/profitSetting.schema";
import { SettingsTitle } from "@/components/Settings/SettingsTitle";

export function ProfitSettings(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProfitSettingSchema),
  });

  const onSubmit = (data: ProfitSettingSchema) => {
    console.log({ data });
  };

  return (
    <div className="border- space-y-4">
      <div className="flex items-center space-x-4">
        <SettingsTitle title="Profit setting" />
        <div className="flex items-center space-x-2">
          <FiClock className="text-xs font-medium" />
          <span className="text-xs font-medium">last update: 13:45</span>
        </div>
      </div>
      <p className="text-base font-medium">Boost Your Earnings with Flexible Profit Margins</p>

      <Card className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardBody className="space-y-6">
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 border-">
              <div className="w-96 border- border-red space-y-2">
                <div className="flex justify-between items-center space-x-4 w-full border- border-green">
                  <span className="text-base font-medium text-dark dark:text-white">
                    Default profit markup
                  </span>
                  <div className="flex rounded-full bg-lightest px-1 text-xs text-darkest">
                    Non-VIP
                  </div>
                </div>
                <Input
                  size="sm"
                  placeholder="10%"
                  {...register("nonVipProfit")}
                  isInvalid={!!errors.nonVipProfit}
                  errorMessage={errors.nonVipProfit && errors.nonVipProfit.message}
                />
                <p className="text-xs text-medium font-normal">
                  This is the profit percentage added for Non-VIP
                </p>
              </div>

              <div className="w-96 border- border-red space-y-2">
                <div className="flex justify-between items-center space-x-4 w-full border- border-green">
                  <span className="text-base font-medium text-dark dark:text-white">
                    Default profit markup
                  </span>
                  <div className="flex items-center space-x-1 rounded-full bg-lightest px-1 text-xs text-caution">
                    <FiStar /> <span>Gold-VIP</span>
                  </div>
                </div>
                <Input
                  size="sm"
                  placeholder="10%"
                  {...register("goldVipProfit")}
                  isInvalid={!!errors.goldVipProfit}
                  errorMessage={errors.goldVipProfit && errors.goldVipProfit.message}
                />
                <p className="text-xs text-medium font-normal">
                  This is the profit percentage added for Gold-VIP
                </p>
              </div>

              <div className="w-96 border- border-red space-y-2">
                <div className="flex justify-between items-center space-x-4 w-full border- border-green">
                  <span className="text-base font-medium text-dark dark:text-white">
                    Default profit markup
                  </span>
                  <div className="flex items-center space-x-1 rounded-full bg-lightest px-1 text-xs text-primary">
                    <IoDiamondOutline /> <span>Diamond-VIP</span>
                  </div>
                </div>
                <Input
                  size="sm"
                  placeholder="10%"
                  {...register("diamondVipProfit")}
                  isInvalid={!!errors.diamondVipProfit}
                  errorMessage={errors.diamondVipProfit && errors.diamondVipProfit.message}
                />
                <p className="text-xs text-medium font-normal">
                  This is the profit percentage added for Diamond-VIP
                </p>
              </div>
            </div>

            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 border-">
              <div className="w-96 border- border-red space-y-2">
                <div className="flex justify-between items-center space-x-4 w-full border- border-green">
                  <span className="text-base font-medium text-dark dark:text-white">
                    Minimum profit{" "}
                  </span>
                  <div className="flex rounded-full bg-lightest px-1 text-xs text-darkest">
                    Non-VIP
                  </div>
                </div>
                <Input
                  size="sm"
                  placeholder="$ 500"
                  {...register("nonVipMinimumProfit")}
                  isInvalid={!!errors.nonVipMinimumProfit}
                  errorMessage={errors.nonVipMinimumProfit && errors.nonVipMinimumProfit.message}
                />
                <p className="text-xs text-medium font-normal">Minimum profit for regular user</p>
              </div>

              <div className="w-96 border- border-red space-y-2">
                <div className="flex justify-between items-center space-x-4 w-full border- border-green">
                  <span className="text-base font-medium text-dark dark:text-white">
                    Minimum profit{" "}
                  </span>
                  <div className="flex items-center space-x-1 rounded-full bg-lightest px-1 text-xs text-caution">
                    <FiStar /> <span>Gold-VIP</span>
                  </div>
                </div>
                <Input
                  size="sm"
                  placeholder="10%"
                  {...register("goldVipMinimumProfit")}
                  isInvalid={!!errors.goldVipMinimumProfit}
                  errorMessage={errors.goldVipMinimumProfit && errors.goldVipMinimumProfit.message}
                />
                <p className="text-xs text-medium font-normal">Minimum profit for Gold user</p>
              </div>

              <div className="w-96 border- border-red space-y-2">
                <div className="flex justify-between items-center space-x-4 w-full border- border-green">
                  <span className="text-base font-medium text-dark dark:text-white">
                    Minimum profit{" "}
                  </span>
                  <div className="flex items-center space-x-1 rounded-full bg-lightest px-1 text-xs text-primary">
                    <IoDiamondOutline /> <span>Diamond-VIP</span>
                  </div>
                </div>
                <Input
                  size="sm"
                  placeholder="10%"
                  {...register("diamondVipMinimumProfit")}
                  isInvalid={!!errors.diamondVipMinimumProfit}
                  errorMessage={
                    errors.diamondVipMinimumProfit && errors.diamondVipMinimumProfit.message
                  }
                />
                <p className="text-xs text-medium font-normal">Minimum profit for Diamond user</p>
              </div>
            </div>
          </CardBody>
          <CardFooter className="space-y-6 flex flex-col items-start">
            <div className="space-y-2">
              <Button
                as={Link}
                to={SidebarRoutes.settingsAdvanced}
                className="bg-light text-dark"
                endContent={<MdKeyboardArrowRight />}
              >
                Advanced markup percentage
              </Button>
              <p className="text-xs text-medium font-normal">
                or Choose where this rate is applied
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button type="submit" className="bg-primary text-white">
                Update rates{" "}
              </Button>
              <span className="text-xs text-medium font-normal">last update: 13:45</span>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
