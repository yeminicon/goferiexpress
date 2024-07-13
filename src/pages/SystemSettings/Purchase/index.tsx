import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import { FiClock } from "react-icons/fi";
import { SettingsTitle } from "@/components/Settings/SettingsTitle";
import { AdvancedPurchaseModal } from "@/components/Settings/PurchaseModals/AdvancePurchaseModal";

const defaulBuyNow = [
  { label: "Enable", value: "enable" },
  { label: "Disable (Request Quote: Enabled)", value: "disable" },
];

export function PurchaseSetting() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="border- space-y-4">
        <div className="flex items-center space-x-4">
          <SettingsTitle title="Purchase setting" />
          <div className="flex items-center space-x-2">
            <FiClock className="text-xs font-medium" />
            <span className="text-xs font-medium">last update: 13:45</span>
          </div>
        </div>
        <p className="text-base font-medium">
          Fine-Tune the 'Buy Now candidate' Experience to Match Your Business Goals and Customer
          Needs
        </p>
        <Card className="">
          <form>
            <CardBody className="space-y-6">
              <div className="flex flex-col space-y-2">
                <span className="">Default Buy Now candidate Status</span>
                <div className="flex space-x-8">
                  <div className="space-y-2 flex flex-col">
                    <Select
                      size="sm"
                      items={defaulBuyNow}
                      defaultSelectedKeys={["disable"]}
                      className="max-w-xs"
                    >
                      {(frei) => <SelectItem key={frei.value}>{frei.label}</SelectItem>}
                    </Select>
                    <span className="text-xs font-medium text-medium">
                      Empower Your Customers: Choose How They <br /> Interact with Your Products
                    </span>
                  </div>
                  <div className="space-y-2 flex flex-col">
                    <Select
                      size="sm"
                      placeholder="Advanced purchase"
                      className="max-w-xs"
                      onClick={onOpen}
                      // @ts-expect-error custom filter
                      children={null}
                    ></Select>

                    <span className="text-xs font-medium text-medium">
                      or Manually choose items users can buy or request quote.
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 flex flex-col">
                <Input
                  label="Default Quotation request"
                  labelPlacement="outside"
                  placeholder="$ 30,000"
                  className="max-w-xs"
                  size="lg"
                />
                <span className="text-xs font-medium text-medium">
                  Orders above this amount would be a quotation
                </span>
              </div>
              <div className="space-y-3 flex flex-col">
                <Textarea
                  label="Large Order Quotation request"
                  labelPlacement="outside"
                  placeholder="Your order appears substantial. Please request a quote for us to offer a more suitable price on your order."
                  className="max-w-lg"
                />
                <span className="text-xs font-medium text-medium">
                  Reason for quotation request
                </span>
              </div>
              <Button type="submit" className="bg-primary text-white w-1/6">
                Update purchase settings{" "}
              </Button>
            </CardBody>
          </form>
        </Card>
      </div>
      <AdvancedPurchaseModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
