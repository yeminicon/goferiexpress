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

export function KYCSettings(): JSX.Element {
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
        <SettingsTitle title="KYC update" />
        <div className="flex items-center space-x-2">
          <FiClock className="text-xs font-medium" />
          <span className="text-xs font-medium">last update: 00:00</span>
        </div>
      </div>
      <p className="text-base font-medium">Complete your registration </p>

      <Card className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardBody className="space-y-6">
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 border-">
              <div className="w-96 border- border-red space-y-2">
                <div className="flex justify-between items-center space-x-4 w-full border- border-green">
                  <span className="text-base font-medium text-dark dark:text-white">
                    FullName
                  </span>
                  <div className="flex rounded-full bg-lightest px-1 text-xs text-darkest">
                    
                  </div>
                </div>
                <Input
                  size="sm"
                  placeholder="Jack Beurer"
                  {...register("nonVipProfit")}
                  isInvalid={!!errors.nonVipProfit}
                  errorMessage={errors.nonVipProfit && errors.nonVipProfit.message}
                />
                <p className="text-xs text-medium font-normal">
                  not editable
                </p>
              </div>

              <div className="w-96 border- border-red space-y-2">
                <div className="flex justify-between items-center space-x-4 w-full border- border-green">
                  <span className="text-base font-medium text-dark dark:text-white">
                    Email address
                  </span>
                  <div className="flex items-center space-x-1 rounded-full bg-lightest px-1 text-xs text-caution">
                    <FiStar /> <span></span>
                  </div>
                </div>
                <Input
                  size="sm"
                  placeholder="user@example.com"
                  {...register("goldVipProfit")}
                  isInvalid={!!errors.goldVipProfit}
                  errorMessage={errors.goldVipProfit && errors.goldVipProfit.message}
                />
                <p className="text-xs text-medium font-normal">
                 not editable
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
                   Phone number
                  </span>
                  <div className="flex rounded-full bg-lightest px-1 text-xs text-darkest">
                    
                  </div>
                </div>
                <Input
                  size="sm"
                  placeholder="+2348144616094"
                  {...register("nonVipProfit")}
                  isInvalid={!!errors.nonVipProfit}
                  errorMessage={errors.nonVipProfit && errors.nonVipProfit.message}
                />
                <p className="text-xs text-medium font-normal">
                 editable
                </p>
              </div>

              <div className="w-96 border- border-red space-y-2">
                <div className="flex justify-between items-center space-x-4 w-full border- border-green">
                  <span className="text-base font-medium text-dark dark:text-white">
                   Bank name
                  </span>
                  <div className="flex items-center space-x-1 rounded-full bg-lightest px-1 text-xs text-caution">
                    <FiStar /> <span>one time</span>
                  </div>
                </div>
                <Input
                  size="sm"
                  placeholder="First Bank"
                  {...register("goldVipProfit")}
                  isInvalid={!!errors.goldVipProfit}
                  errorMessage={errors.goldVipProfit && errors.goldVipProfit.message}
                />
                <p className="text-xs text-medium font-normal">
                 not editable
                </p>
              </div>

              <div className="w-96 border- border-red space-y-2">
                <div className="flex justify-between items-center space-x-4 w-full border- border-green">
                  <span className="text-base font-medium text-dark dark:text-white">
                  Bank Account number
                  </span>
                  <div className="flex items-center space-x-1 rounded-full bg-lightest px-1 text-xs text-primary">
                    <IoDiamondOutline /> <span></span>
                  </div>
                </div>
                <Input
                  size="sm"
                  placeholder="0538679106"
                  {...register("diamondVipProfit")}
                  isInvalid={!!errors.diamondVipProfit}
                  errorMessage={errors.diamondVipProfit && errors.diamondVipProfit.message}
                />
                <p className="text-xs text-medium font-normal">
                  not editable
                </p>
              </div>
            </div>

            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 border-">
              <div className="w-96 border- border-red space-y-2">
                <div className="flex justify-between items-center space-x-4 w-full border- border-green">
                  <span className="text-base font-medium text-dark dark:text-white">
                    bvm
                  </span>
                  <div className="flex rounded-full bg-lightest px-1 text-xs text-darkest">
                   
                  </div>
                </div>
                <Input
                  size="sm"
                  placeholder="44444444444"
                  {...register("nonVipProfit")}
                  isInvalid={!!errors.nonVipProfit}
                  errorMessage={errors.nonVipProfit && errors.nonVipProfit.message}
                />
                <p className="text-xs text-medium font-normal">
                  not editable
                </p>
              </div>

              <div className="w-96 border- border-red space-y-2">
                <div className="flex justify-between items-center space-x-4 w-full border- border-green">
                  <span className="text-base font-medium text-dark dark:text-white">
                   bvn secondTrustee
                  </span>
                  <div className="flex items-center space-x-1 rounded-full bg-lightest px-1 text-xs text-caution">
                    <FiStar /> <span>Gold-VIP</span>
                  </div>
                </div>
                <Input
                  size="sm"
                  placeholder="44444444444"
                  {...register("goldVipProfit")}
                  isInvalid={!!errors.goldVipProfit}
                  errorMessage={errors.goldVipProfit && errors.goldVipProfit.message}
                />
                <p className="text-xs text-medium font-normal">
                  not editable
                </p>
              </div>

              <div className="w-96 border- border-red space-y-2">
                <div className="flex justify-between items-center space-x-4 w-full border- border-green">
                  <span className="text-base font-medium text-dark dark:text-white">
                  Email SecondTrustee
                  </span>
                  <div className="flex items-center space-x-1 rounded-full bg-lightest px-1 text-xs text-primary">
                    <IoDiamondOutline /> <span></span>
                  </div>
                </div>
                <Input
                  size="sm"
                  placeholder="seconUser@gmail.com"
                  {...register("diamondVipProfit")}
                  isInvalid={!!errors.diamondVipProfit}
                  errorMessage={errors.diamondVipProfit && errors.diamondVipProfit.message}
                />
                <p className="text-xs text-medium font-normal">
                not editable
                </p>
              </div>
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 border-">
              <div className="w-96 border- border-red space-y-2">
                <div className="flex justify-between items-center space-x-4 w-full border- border-green">
                  <span className="text-base font-medium text-dark dark:text-white">
                  Business Name
                  </span>
                  <div className="flex rounded-full bg-lightest px-1 text-xs text-darkest">
                   
                  </div>
                </div>
                <Input
                  size="sm"
                  placeholder="Technolar"
                  {...register("nonVipProfit")}
                  isInvalid={!!errors.nonVipProfit}
                  errorMessage={errors.nonVipProfit && errors.nonVipProfit.message}
                />
                <p className="text-xs text-medium font-normal">
                 not editable
                </p>
              </div>

              <div className="w-96 border- border-red space-y-2">
                <div className="flex justify-between items-center space-x-4 w-full border- border-green">
                  <span className="text-base font-medium text-dark dark:text-white">
                  country
                  </span>
                  <div className="flex items-center space-x-1 rounded-full bg-lightest px-1 text-xs text-caution">
                    <FiStar /> <span></span>
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
                 not editable
                </p>
              </div>

              <div className="w-96 border- border-red space-y-2">
                <div className="flex justify-between items-center space-x-4 w-full border- border-green">
                  <span className="text-base font-medium text-dark dark:text-white">
                  State
                  </span>
                  <div className="flex items-center space-x-1 rounded-full bg-lightest px-1 text-xs text-primary">
                    <IoDiamondOutline /> <span>Diamond-VIP</span>
                  </div>
                </div>
                <Input
                  size="sm"
                  placeholder="Nigeria"
                  {...register("diamondVipProfit")}
                  isInvalid={!!errors.diamondVipProfit}
                  errorMessage={errors.diamondVipProfit && errors.diamondVipProfit.message}
                />
                <p className="text-xs text-medium font-normal">
                  
                </p>
              </div>
            </div>

            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 border-">
              <div className="w-96 border- border-red space-y-2">
                <div className="flex justify-between items-center space-x-4 w-full border- border-green">
                  <span className="text-base font-medium text-dark dark:text-white">
                   lga
                  </span>
                  <div className="flex rounded-full bg-lightest px-1 text-xs text-darkest">
                 
                  </div>
                </div>
                <Input
                  size="sm"
                  placeholder="Ikeja"
                  {...register("nonVipProfit")}
                  isInvalid={!!errors.nonVipProfit}
                  errorMessage={errors.nonVipProfit && errors.nonVipProfit.message}
                />
                <p className="text-xs text-medium font-normal">
                  
                </p>
              </div>

              <div className="w-96 border- border-red space-y-2">
                <div className="flex justify-between items-center space-x-4 w-full border- border-green">
                  <span className="text-base font-medium text-dark dark:text-white">
                    Local Address
                  </span>
                  <div className="flex items-center space-x-1 rounded-full bg-lightest px-1 text-xs text-caution">
                    <FiStar /> <span></span>
                  </div>
                </div>
                <Input
                  size="sm"
                  placeholder="lgs"
                  {...register("goldVipProfit")}
                  isInvalid={!!errors.goldVipProfit}
                  errorMessage={errors.goldVipProfit && errors.goldVipProfit.message}
                />
                <p className="text-xs text-medium font-normal">
                 
                </p>
              </div>

              <div className="w-96 border- border-red space-y-2">
                <div className="flex justify-between items-center space-x-4 w-full border- border-green">
                  <span className="text-base font-medium text-dark dark:text-white">
                   Postal code
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
                Advanced kyc settings
              </Button>
              <p className="text-xs text-medium font-normal">
                kyc types
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
