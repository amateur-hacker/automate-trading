import { SetStateAction } from "react";

export interface SearchResultDataType {
  id: number;
  title: string;
  url: string;
  detail: string;
  star: string;
  vote: string;
  news: string;
  videoLink: string;
}

export interface SearchBarTabProps {
  callbackActive: (tab: SetStateAction<string>) => void;
}
