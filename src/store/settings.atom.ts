import { atom } from "jotai";

export type AdvancedPurchaseView = "BUYNOW" | "CATEGORY" | "SUBCATEGORY" | "PRODUCT";

export const modalViewAtom = atom<AdvancedPurchaseView>("BUYNOW");

export const visibilityModalViewAtom = atom<AdvancedPurchaseView>("BUYNOW");
