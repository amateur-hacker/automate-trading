import { SetStateAction } from "react";

export interface createUserDataType {
  email: string;
  name: string;
  surname: string;
  mobile: string;
}

export interface ContactUsersType {
  id: number;
  avatar: string;
  name: string;
  surname: string;
  email: string;
  age: string;
  mobile: string;
}

interface ContactReducerDataType {
  users: [] | ContactUsersType[];
  data: [];
}
export interface ContactReducerType {
  ContactReducer: ContactReducerDataType;
}

export interface UserCallbackUserType {
  id?: number | undefined;
  name?: string;
  surname?: string;
  age?: string;
  mobile?: string;
  avatar?: string;
  email?: string;
}
export interface UserUpdateType {
  name: string;
  surname: string;
  email: string;
  mobile: string;
}

export interface ContactDetailsProps {
  selectedUser: UserCallbackUserType;
  userEditCallback: (edit: boolean, usersData: UserUpdateType) => void;
}

export interface ListNewContactProps {
  users: any;
  userCallback: (user: UserCallbackUserType) => void;
}

export interface NavOrgProps {
  callback: (tab: SetStateAction<string>) => void;
}

export interface TabComponentsProps {
  activeTab: string;
}

export interface PersonalTabProps {
  users: [] | ContactUsersType[];
}

export interface propsTypes {
  printModal: boolean;
  selectedUser: UserCallbackUserType;
  toggleCallback: (result: boolean) => void;
}

export interface UpdateUserProps {
  editData: any;
  userEditCallback: (edit: boolean, usersData: UserUpdateType) => void;
}
