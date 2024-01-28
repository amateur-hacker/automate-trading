import { Href, ImagePath } from "@/Constant";
import { FileText, LogOut, Mail, Server, Settings, User, Users } from "react-feather";

export const UserProfileData = [
  {
    link: "/users/userprofile",
    logo: <Users />,
    name: "Account",
  },
  {
    link: "/email/mailbox",
    logo: <Mail />,
    name: "Inbox",
  },
  {
    link: "/users/useredit",
    logo: <Settings />,
    name: "Settings",
  },
];

export const NotificationData = [
  {
    id: 1,
    image: `${ImagePath}/avtar/man.png`,
    name: "Jhone Doe",
    description: "can you help me to find best admin?.",
    time: "10:20",
    class: "bg-light-primary",
  },
  {
    id: 2,
    image: `${ImagePath}/avtar/teacher.png`,
    name: "Jhone Doe",
    description: "Sure, zeta is best admin for project.",
    time: "6:20",
    class: "bg-light-secondary",
  },
  {
    id: 3,
    image: `${ImagePath}/avtar/teenager.png`,
    name: "Jhone Doe",
    description: "you can check it here for admin.",
    time: "5:20",
    class: "bg-light-info",
  },
  {
    id: 4,
    image: `${ImagePath}/avtar/chinese.png`,
    name: "Jhone Doe",
    description: "I checked its nice theme, Thanks.",
    time: "1:20",
    class: "bg-light-success",
  },
];
export const CartData = [
  {
    id: 1,
    image: `${ImagePath}/banner-1.jpg`,
    title: "Black shirt with jacket",
    price: "$500",
  },
  {
    id: 2,
    image: `${ImagePath}/product-4.png`,
    title: "Woman bag - purple",
    price: "$100",
  },
  {
    id: 3,
    image: `${ImagePath}/product-6.jpg`,
    title: "Unisex headphone - Red",
    price: "$200",
  },
  {
    id: 4,
    image: `${ImagePath}/banner/1.jpg`,
    title: "Ergonomic Chair",
    price: "$920",
  },
];

export const BookmarkData = [
  {
    icon: <FileText />,
    pathName: "/filemanager",
  },
  {
    icon: <User />,
    pathName: "/tasks",
  },
  {
    icon: <Server />,
    pathName: "/socialapp",
  },
];

export const LanguagesData = [
  {
    data: "hi",
    logo: "flag-icon flag-icon-in",
    language: "हिन्दी",
  },
  {
    data: "en",
    logo: "flag-icon flag-icon-us",
    language: "English",
  },
  {
    data: "es",
    logo: "flag-icon flag-icon-is",
    language: "Spanish",
  },
  {
    data: "pt",
    logo: "flag-icon flag-icon-uy",
    language: "Portuegse",
  },
  {
    data: "fr",
    logo: "flag-icon flag-icon-nz",
    language: "French",
  },
  {
    data: "ae",
    logo: "flag-icon flag-icon-ae",
    language: "لعربية",
  },
  {
    data: "du",
    logo: "flag-icon flag-icon-de",
    language: "Deutsch",
  },
  {
    data: "cn",
    logo: "flag-icon flag-icon-cn",
    language: "简体中文",
  },
];
