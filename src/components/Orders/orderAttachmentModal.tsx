import { CustomModalProps } from "@/pages/Users/users.interface";
import { Modal, ModalContent, ModalBody, Image } from "@nextui-org/react";
import { IoClose } from "react-icons/io5";

function OrderAttachmentModal({ isOpen, onClose, onOpenChange }: CustomModalProps): JSX.Element {
  return (
    <Modal size="4xl" isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
      <ModalContent>
        <ModalBody>
          <div className="pt-5 pb-10 relative">
            <div
              onClick={onClose}
              className="absolute top-6 right-1 z-10 w-8 h-8 md:w-12 md:h-12 rounded-full bg-slate-50 dark:bg-dark flex items-center justify-center cursor-pointer"
            >
              <IoClose size={18} />
            </div>
            <div className="mb-6">
              <Image
                width="100%"
                height="100%"
                radius="md"
                alt="profile image"
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-[645px] w-full z-0"
              />
            </div>
            <div>
              <h1 className="text-lg font-medium">Order Request</h1>
              <p className="text-sm mt-2">
                I recently purchased this product, and I must say, it exceeded my expectations! The
                quality is top-notch, and it's incredibly user-friendly. I love how versatile it is
                and how it has simplified my daily tasks. Overall, a fantastic addition to my life.
              </p>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default OrderAttachmentModal;
