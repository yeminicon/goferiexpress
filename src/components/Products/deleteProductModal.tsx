import { CustomModalProps } from "@/pages/Users/users.interface";
import { Modal, ModalContent, ModalBody, Button } from "@nextui-org/react";
import { RiDeleteBinLine } from "react-icons/ri";

function DeleteProductModal({ isOpen, onOpenChange, onClose }: CustomModalProps): JSX.Element {
  return (
    <Modal size="md" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalBody>
          <div className="flex flex-col py-6">
            <div className="rounded-full bg-slate-100 w-14 h-14 flex justify-center items-center mx-auto">
              <div className="rounded-full bg-white w-10 h-10 flex justify-center items-center">
                <RiDeleteBinLine className="text-xl text-red" />
              </div>
            </div>
            <div className="pt-4 text-center">
              <h3 className="text-lg font-medium">Delete Product Confirmation</h3>
              <p className="text-sm text-gray-600 dark:text-white mt-1">
                This action will permanently remove the product from our catalog.
              </p>
            </div>
            <div className="flex gap-3 pt-8">
              <Button
                onClick={onClose}
                size="lg"
                fullWidth={true}
                className="bg-white shadow-sm border dark:text-primary"
              >
                Cancel
              </Button>
              <Button size="lg" fullWidth={true} color="primary" className="shadow-sm">
                Delete
              </Button>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default DeleteProductModal;
