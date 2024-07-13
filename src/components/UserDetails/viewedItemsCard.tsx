function ViewedItemsCard(): JSX.Element {
  return (
    <div className="w-full border dark:border-dark rounded-2xl py-4 flex flex-col justify-between items-center h-[30rem]">
      <div className="flex flex-col items-center gap-8">
        <h1 className="font-medium text-xl">Viewed Items</h1>
        <div className="flex flex-col items-center justify-center w-64 h-64 dark:border-light rounded-full border-[1rem]">
          <p className="text-sm font-medium">Total</p>
          <h1 className="font-medium text-5xl">57</h1>
        </div>
      </div>
      <div onClick={() => console.log("Clicked")} className="cursor-pointer">
        <p className="text-primary-300 text-xs font-normal">Open viewed items</p>
      </div>
    </div>
  );
}

export default ViewedItemsCard;
