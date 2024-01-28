import { Dispatch, LegacyRef, SetStateAction } from "react";

export interface ProductData {
  id: number;
  img: string;
  name: string;
  note: string;
  discription: string;
  discountPrice: string;
  status: string;
  price: number;
  stock: string;
  review: string;
  category: string;
  colors: string[];
  size: string[];
  tags: string[];
  variants: {
    color: string;
    images: string;
  }[];
  quantity?: number;
}

export interface filterValueTypes {
  brand: string[];
  color: string;
  value: {
    min: number;
    max: number;
  };
  sortBy: string;
  searchBy: string;
  category: string[];
}

export interface EccomInitialStateProps {
  Data: ProductData[];
  cartData: ProductData[];
  filterValue: filterValueTypes;
}

export interface CommonGridProps {
  gridCount: number[];
}

export interface ItemDescriptionTypes {
  ref: LegacyRef<HTMLDivElement> | undefined;
}

export interface ProductModalType {
  setOpenModal:  Dispatch<SetStateAction<boolean>>;
  value: boolean;
  dataId: number|undefined;
  modelData: ProductData|undefined
  
}

export interface CheckoutTableDataType {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

interface RootObject {
  id: number;
  img: string;
  name: string;
  note: string;
  discription: string;
  discountPrice: string;
  price: number;
  status: string;
  stock: string;
  review: string;
  category: string;
  colors: string[];
  size: string[];
  tags: string[];
  variants: Variant[];
}

interface Variant {
  color: string;
  images: string;
}