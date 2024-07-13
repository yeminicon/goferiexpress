import { CustomModalProps } from "@/pages/Users/users.interface";
import { Button, Input, Modal, ModalBody, ModalContent } from "@nextui-org/react";

function SpecialOfferModal({ isOpen, onOpenChange }: CustomModalProps): JSX.Element {
  return (
    <Modal size="xl" hideCloseButton isOpen={isOpen} onOpenChange={onOpenChange} className="py-4">
      <ModalContent>
        <ModalBody>
          <div>
            <h1 className="text-base font-medium">Special Offers</h1>
            <p className="mt-2 text-sm">Mark selected Product as Special Offer</p>
            <div className="py-6">
              <Input
                type="number"
                label="Enter max amount"
                variant="bordered"
                placeholder="0.00"
                labelPlacement="outside"
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">$</span>
                  </div>
                }
              />
            </div>
            <div className="flex gap-4 items-center">
              <Button color="primary" radius="sm">
                Approve
              </Button>
              <Button
                color="default"
                variant="light"
                radius="sm"
                className="shadow-sm dark:text-white"
              >
                Decline
              </Button>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SpecialOfferModal;
