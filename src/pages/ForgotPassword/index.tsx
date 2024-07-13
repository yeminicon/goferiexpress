import { Button, Input } from "@nextui-org/react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotPasswordSchema, forgotPasswordSchemaT } from "./forgotPassword.schema";

export default function ForgotPasswordPage(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<forgotPasswordSchemaT>({
    resolver: yupResolver(forgotPasswordSchema),
  });
  const onSubmit = (data: forgotPasswordSchemaT) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <h1 className="text-4xl lg:text-5xl font-bold text-center">Forgot password</h1>
      <p className="text-lg text-gray-400 text-center mt-2">
        Enter a valid Email for authentication
      </p>
      <form className="py-4">
        <div className="py-2">
          <p className="text-lg text-gray-500 py-4">Email</p>
          <Input
            className="w-full"
            size="lg"
            labelPlacement="outside"
            variant="bordered"
            type="email"
            errorMessage={errors?.email?.message}
            {...register("email")}
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
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
