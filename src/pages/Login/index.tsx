import { Link, Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { AuthRoutes,SidebarRoutes } from '@/types/routes';
import { logInSchema, loginSchemaT } from "./login.schema";


function LoginPage(): JSX.Element {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginSchemaT>({
    resolver: yupResolver(logInSchema),
  });
  const onSubmit = (data: loginSchemaT) => {
    navigate(SidebarRoutes.dashboard);
    console.log(data);
  };
  return (
    <div className="w-full">
      <div className="2xl:mt-24 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold">Login to continue </h1>
        <p className="text-lg text-gray-400 text-center mt-2">please use a valid name or ID</p>
      </div>
      <form className="py-4">
        <div className="pb-4">
          <p className="text-lg text-gray-500 pb-2 2xl:py-4">Name or ID</p>
          <Input
            className="w-full"
            size="lg"
            labelPlacement="outside"
            variant="bordered"
            type="email"
            errorMessage={errors?.name?.message}
            {...register("name")}
          />
        </div>
        <div className="pt-1.5 2xl:pt-2">
          <p className="text-lg text-gray-500 pb-2 2xl:py-4">Password</p>
          <Input
            className="w-full"
            size="lg"
            labelPlacement="outside"
            variant="bordered"
            type="password"
            errorMessage={errors?.password?.message}
            {...register("password")}
          />
        </div>
        <Link href={AuthRoutes.forgotPassword} className="font-medium mt-1 2xl:mt-2 text-primary">
          Forgot password
        </Link>
        <div className="py-6">
          <Button
            type="submit"
            variant="solid"
            className="bg-primary	text-white font-bold w-full"
            size="lg"
            onClick={handleSubmit(onSubmit)}
          >
            Login
          </Button>
        </div>
      </form>
      <div className="">
        <p className="text-center text-sm md:text-base">
          All rights reserved, Promoted Products {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
