import { Modal, ModalContent, ModalBody, ModalProps } from "@nextui-org/react";

type Props = {
  isOpen: boolean;
} & ModalProps;

function GeneralModal(props: Props): JSX.Element {
  return (
    <Modal {...props}>
      <ModalContent>
        <ModalBody>{props.children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default GeneralModal;
