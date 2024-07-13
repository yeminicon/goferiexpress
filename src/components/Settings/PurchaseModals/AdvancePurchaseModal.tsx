import { useAtom } from "jotai";
import { Modal, ModalContent } from "@nextui-org/react";
import { AdvancedPurchaseView, modalViewAtom } from "@/store/settings.atom";
import { BuyNowView } from "./BuyNowView";
import { CategorySettingModal } from "./CategorySettingModal";
import { SubCategorySettingModal } from "./Subcategory";
import { ProductSetting } from "./ProductSetting";

const RenderModalView: Record<AdvancedPurchaseView, JSX.Element | null> = {
  BUYNOW: <BuyNowView />,
  CATEGORY: <CategorySettingModal />,
  SUBCATEGORY: <SubCategorySettingModal />,
  PRODUCT: <ProductSetting />,
};

export function AdvancedPurchaseModal({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) {
  const [modalView, setModalView] = useAtom(modalViewAtom);

  const resetViewOnClose = () => {
    setModalView("BUYNOW");
  };

  return (
    <>
      <Modal
        size="4xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton
        onClose={resetViewOnClose}
      >
        <ModalContent>{RenderModalView[modalView]}</ModalContent>
      </Modal>
    </>
  );
}
