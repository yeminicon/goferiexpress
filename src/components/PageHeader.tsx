export default function PageHeader({
  title,
  isInnerPage,
}: {
  title: string;
  isInnerPage?: boolean;
}) {
  return (
    <div className="my-6">
      <h1
        className={`text-lg sm:text-xl font-semibold ${isInnerPage ? "text-primary" : "text-dark dark:text-white"}`}
      >
        {title}
      </h1>
    </div>
  );
}
