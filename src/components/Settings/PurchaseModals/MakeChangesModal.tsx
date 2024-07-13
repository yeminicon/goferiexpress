import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

export function MakeChangesModal({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Select Status to apply</ModalHeader>
            <ModalBody className="space-y-2">
              <p>You are making changes to the purchase status of the selected products</p>
              <Input placeholder="Enable Buy Now candidate" />
            </ModalBody>
            <ModalFooter className=" justify-start">
              <Button color="primary" onPress={onClose}>
                Apply Status
              </Button>
              <Button color="primary" variant="bordered" onPress={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
