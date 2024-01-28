import { Dispatch, SetStateAction } from "react";

export interface SearchMembersProps {
  setMembersData: Dispatch<
    SetStateAction<
      {
        id: number;
        name: string;
        image: string;
        status: string;
        lastSeenDate: string;
        online: boolean;
        typing: boolean;
        time: string;
        reply: string;
      }[]
    >
  >;
}

export interface AllMembersType {
  id: number;
  name: string;
  thumb: string;
  status: string;
  lastSeenDate: string;
  online: boolean;
  typing: boolean;
  time: string;
  reply: string;
}
export interface chatReducerType {
  toggleSideBar: boolean;
  allMembers: [] | AllMembersType[];
  members: AllMembersType[] | [] | AllMembersType | undefined | any;
  currentUser: AllMembersType;
  activeChat: any;
  selectedUser: AllMembersType;
  chats: any;
}
export interface ChatAppType {
  ChatReducer: chatReducerType;
}
export interface messageType {
  sender: number;
  text: string;
  time: string;
}

export interface propsType {
  RowClass?: string;
}

export interface ChatMenuTabContentProps {
  activeTab: number;
}

export interface ChatType {
  users: number[];
  messages: messagesType[];
}

export interface messagesType {
  sender: number;
  text: string;
  time: string;
}

export interface ChatEmojiType {
  id: string;
  name: string;
  native: string;
  unified: string;
  keywords: string[];
  shortcodes: string;
  emoticons: string[];
}
