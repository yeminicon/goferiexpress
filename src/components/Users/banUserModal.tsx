import { CustomModalProps } from "@/pages/Users/users.interface";
import { Button, Modal, ModalContent, ModalBody } from "@nextui-org/react";
import { TiCancel } from "react-icons/ti";

function BanUserModal({ isOpen, onOpenChange, onClose }: CustomModalProps): JSX.Element {
  return (
    <Modal size="md" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalBody>
          <div className="flex flex-col py-6">
            <div className="rounded-full bg-slate-100 w-14 h-14 flex justify-center items-center mx-auto">
              <div className="rounded-full bg-white w-10 h-10 flex justify-center items-center">
                <TiCancel className="text-3xl text-warning-500" />
              </div>
            </div>
            <div className="pt-4 text-center">
              <h3 className="text-lg font-medium">Ban User Confirmation.</h3>
              <p className="text-sm text-gray-600 dark:text-white mt-1">
                Banning a user will restrict their access and actions on our platform. This action
                cannot be undone.
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
                Ban user
              </Button>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default BanUserModal;
