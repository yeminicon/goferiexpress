export interface ProductsProps {
  id: string;
  productName: string;
  image: string;
  amount: number;
  vendorName: string;
  vendorProfilePicture: string;
  openModal: () => void;
}
