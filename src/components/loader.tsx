import { Spinner } from "@nextui-org/react";

interface Props {
  message: string;
}

function Loader({ message }: Props): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-dark dark:text-white h-full">
      <Spinner size="lg" color="primary" />
      <p className="font-medium text-base md:text-lg">{message}</p>
    </div>
  );
}

export default Loader;
