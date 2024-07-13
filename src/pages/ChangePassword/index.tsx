import { Button, Input } from "@nextui-org/react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { changePasswordSchema, changePasswordSchemaT } from "./changePassword.schema";

export default function ChangePasswordPage(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<changePasswordSchemaT>({
    resolver: yupResolver(changePasswordSchema),
  });
  const onSubmit = (data: changePasswordSchemaT) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="text-4xl lg:text-5xl font-bold text-center">Change Password</h1>
      <p className="text-lg text-gray-400 text-center mt-2">
        Identification confirmed, add type Password.
      </p>

      <form className="py-4 px-2">
        <div className="py-2">
          <p className="text-lg text-gray-500 py-4">Password</p>
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

        <div className="py-2">
          <p className="text-lg text-gray-500 py-4">Confirm password</p>
          <Input
            className="w-full"
            size="lg"
            labelPlacement="outside"
            variant="bordered"
            type="password"
            errorMessage={errors?.confirmPassword?.message}
            {...register("confirmPassword")}
          />
        </div>

        <div className="py-6">
          <Button
            type="submit"
            variant="solid"
            className="bg-primary text-white font-bold w-full"
            size="lg"
            onClick={handleSubmit(onSubmit)}
          >
            Done
          </Button>
        </div>
      </form>
    </>
  );
}
