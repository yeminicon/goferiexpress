import { useAtom } from "jotai";
import { Modal, ModalContent } from "@nextui-org/react";
import { AdvancedPurchaseView, visibilityModalViewAtom } from "@/store/settings.atom";
import { VendorsView } from "./VendorsView";
import { CategoryModalView } from "./CategoryView";
import { SubCategorySettingModal } from "./Subcategory";
import { ProductView } from "./ProductView";

const RenderModalView: Record<AdvancedPurchaseView, JSX.Element | null> = {
  BUYNOW: <VendorsView />,
  CATEGORY: <CategoryModalView />,
  SUBCATEGORY: <SubCategorySettingModal />,
  PRODUCT: <ProductView />,
};

export function VisibilityModalView({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) {
  const [modalView, setModalView] = useAtom(visibilityModalViewAtom);

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
