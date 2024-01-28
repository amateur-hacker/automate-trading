import { Dispatch, SetStateAction } from "react";
import { SearchBarArrayType } from "./Header";

interface MegaMenuItems {
  title: string;
  type: string;
  path: string;
  active?: boolean;
}

interface ItemsInterfaceProp {
  path?: string;
  title: string;
  type: string;
  active?: boolean;
  pathSlice?: string;
  items?: MegaMenuItems[];
}

export interface ItemsInterface {
  title: string;
  icon?: JSX.Element;
  path?: string;
  bookmark?: boolean;
  type: string;
  badge?: boolean;
  badgeName?: string;
  badgeColor?: string;
  active?: boolean;
  items?: ItemsInterfaceProp[];
  pathSlice?: string;
}

export interface SidebarMenuInterFace {
  menutitle?: string;
  items: ItemsInterface[];
}

export interface data {
  MENUITEMS: ItemsInterface[];
  activeLink: string | undefined;
  level: number;
  handleActive?: any;
  active: any;
  setActiveLink: Dispatch<SetStateAction<string | undefined>>;
}

export interface SidebarSliceType {
  linkItemsArray: SearchBarArrayType[];
  bookmarkedData: bookmarkedDataType[];
}
export interface bookmarkedDataType {
  icon: JSX.Element;
  pathName: string;
  id?: number;
}
