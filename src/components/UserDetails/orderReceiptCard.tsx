import { Divider } from "@nextui-org/react";

interface OrderReceiptCardProps {
  orderId: string;
  orderStatus: string;
  orderDate: string;
}

function OrderReceiptCard({ orderId, orderStatus, orderDate }: OrderReceiptCardProps): JSX.Element {
  return (
    <div className="w-full h-96 rounded-md border dark:border-dark overflow-hidden">
      <div className="py-4 bg-slate-100 dark:bg-dark flex justify-center font-medium text-lg">
        Order Receipt
      </div>
      <div className="px-3">
        <div className="flex py-2 justify-between items-center text-xs font-medium">
          <p>Order ID:</p>
          <p>{orderId}</p>
        </div>
        <div className="flex py-2 justify-between items-center text-xs font-medium">
          <p>Order Status:</p>
          <p
            className={`${
              orderStatus === "Fulfilled"
                ? "text-success-500"
                : orderStatus === "Cancelled"
                  ? "text-red"
                  : "text-warning-500"
            } font-normal`}
          >
            {orderStatus}
          </p>
        </div>
        <div className="flex py-2 justify-between items-center text-xs font-medium">
          <p>Order Time:</p>
          <p>{orderDate}</p>
        </div>
        <div className="flex flex-col items-center gap-1 mt-1 mb-3">
          <h1>Order list</h1>
          <Divider />
        </div>
        <div className="flex py-2 justify-between items-center text-xs font-medium">
          <p>BAGS</p>
          <p>$56.78</p>
        </div>
        <div className="flex py-2 justify-between items-center text-xs font-medium">
          <p>SHOES</p>
          <p>$56.78</p>
        </div>
        <div className="flex py-2 justify-between items-center text-xs font-medium">
          <p>BAGS</p>
          <p>$56.78</p>
        </div>
        <div className="py-2 text-xs font-medium">
          <p className="text-primary">more...</p>
        </div>
        <div className="flex py-2 justify-between items-center text-xs font-medium">
          <p>Order Summary</p>
          <p className="text-green">$456.78</p>
        </div>
      </div>
    </div>
  );
}

export default OrderReceiptCard;
