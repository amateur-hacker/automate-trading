import { ReactNode } from "react";

export interface SearchBarArrayType {
    name: string;
    pathName: any;
    icon: ReactNode;
    bookmarked:boolean
    id:number
  }


interface SidebarSlice {
  linkItemsArray: SearchBarArrayType[];
  bookmarkedData: bookmarkedDataType[];
}
interface bookmarkedDataType {
  icon: JSX.Element;
  pathName: string;
  staredId?: number;
}