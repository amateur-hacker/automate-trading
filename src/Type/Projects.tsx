import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface CommonProjectListProps {
  ProjectListData: {
    title: string;
    id: number;
    badge: string;
    image: string;
    desc: string;
    issue: string;
    resolved: string;
    comment: string;
    like: string;
    progress: string;
    customers_img1: string;
    customers_img2: string;
    customers_img3: string;
    sites: string;
  }[];
}

export interface registerType {
  description: string;
  title: string;
  client_name: string;
  rate: number;
}

export interface TitlePropsType {
  ProjectTitle?: string;
  ClientName?: string;
  errors: FieldErrors<registerType>;
  register: UseFormRegister<registerType>;
  ProjectRate?: string;
  ProjectType?: string;
}

export interface ProjectDropdownProps {
  Priority?: string;
  ProjectSize?: string;
}

export interface CreateProjectDateProps {
  StartingDate?: string;
  EndingDate?: string;
}
