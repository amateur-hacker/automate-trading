import React from "react";
import { BoxSvg, BoxSvg1, CancelledSvg, CancelledSvg1, CloudDrizzleSvg1, CloudDrizzleingSvg, CloudRainMoonSvg, DollarSvg, MessageSvg, NewUsersSvg, PendingSvg, PendingSvg1, ProductSvg, TruckSvg, TruckSvg1 } from "./WidgetsSvg";
import Image from "next/image";
import { MoreHorizontal } from "react-feather";
import { Done, Href, InProgress, Pending, Rejected } from "@/Constant";

export const EarningsData = [
  {
    product: "Earning",
    count: 6659,
    icon: <DollarSvg />,
    class: "progress-gradient-secondary",
  },
  {
    product: "Products",
    count: 9856,
    icon: <ProductSvg />,
    class: "progress-gradient-success",
  },
  {
    product: "Messages",
    count: 893,
    icon: <MessageSvg />,
    class: "progress-gradient-primary",
  },
  {
    product: "New User",
    count: 45631,
    icon: <NewUsersSvg />,
    class: "progress-gradient-danger",
  },
];
export const SalesData = [
  {
    id: 1,
    class1: "widget-icon bg-light-danger",
    class2: "icofont icofont-arrow-down font-danger",
    week: "Today",
    class3: "font-danger",
    logo: "$",
    num: "-36%($2658)",
    week2: " Than yesterday",
  },
  {
    id: 2,
    class1: "widget-icon bg-light-danger",
    class2: "icofont icofont-arrow-down font-danger",
    week: "Month",
    class3: "font-danger",
    logo: "$",
    num: "-15%($369) ",
    week2: " Than last month",
  },
  {
    id: 3,
    class1: "widget-icon bg-light-success",
    class2: "icofont icofont-arrow-up font-success",
    week: "Week",
    class3: "font-success",
    logo: "$",
    num: "+65%($69)",
    week2: "Than yesterday",
  },
  {
    id: 4,
    class1: "widget-icon bg-light-success",
    class2: "icofont icofont-arrow-up font-success",
    week: "Week",
    class3: "font-success",
    logo: "$",
    num: "+65%($69)",
    week2: "Than yesterday",
  },
];
export const OrderDetailsData = [
  {
    id: 1,
    class: "widget-icon bg-light-primary",
    icon1: <BoxSvg />,
    title: "Pending  Order",
    number1: "783",
    number2: "12%",
    class1: "icofont icofont-arrow-down",
    icon2: <BoxSvg1 />,
  },
  {
    id: 2,
    class: "widget-icon bg-light-warning",
    icon1: <PendingSvg />,
    title: "Pending  Order",
    number1: "783",
    number2: "12%",
    class1: "icofont icofont-arrow-down",
    icon2: <PendingSvg1 />,
  },
  {
    id: 3,
    class: "widget-icon bg-light-success",
    icon1: <TruckSvg />,
    title: "Pending  Order",
    number1: "783",
    number2: "12%",
    class1: "icofont icofont-arrow-down",
    icon2: <TruckSvg1 />,
  },
  {
    id: 4,
    class: "widget-icon bg-light-warning",
    icon1: <CancelledSvg />,
    title: "Pending  Order",
    number1: "783",
    number2: "12%",
    class1: "icofont icofont-arrow-down",
    icon2: <CancelledSvg1 />,
  },
];
export const WeatherWidgetsData = [
  {
    temperature: "25°C",
    country: "Paris",
    icon: <CloudDrizzleSvg1 />,
  },
  {
    temperature: "95°F",
    country: "New York",
    icon: <CloudRainMoonSvg />,
  },
  {
    temperature: "48°C",
    country: "India",
    icon: <CloudDrizzleingSvg />,
  },
];

export const RecentActivityData = [
  {
    id: 1,
    title: "Any desktop publishing pack ages editors.",
  },
  {
    id: 2,
    title: "Contrary to popular belief, Lorem Ipsum is not simply.",
  },
  {
    id: 3,
    title: "Established fact that a reader will be distracted lorem.",
  },
  {
    id: 4,
    title: "Established fact that a reader will be distracted lorem.",
  },
];

export const CommonWidgetsDropdown = (
  <div className="icon-box onhover-dropdown">
    <MoreHorizontal />
    <div className="icon-box-show onhover-show-div">
      <ul className="text-start">
        <li>
          <a href={Href}> {Done}</a>
        </li>
        <li>
          <a href={Href}>{Pending}</a>
        </li>
        <li>
          <a href={Href}>{Rejected}</a>
        </li>
        <li>
          <a href={Href}>{InProgress}</a>
        </li>
      </ul>
    </div>
  </div>
);

export const SocialMediaImageData = [1, 2, 3, 4, 5];

export const SocialHandelData = [
  {
    image: 2,
    title: "Facebook",
  },
  {
    image: 3,
    title: "Twitter",
  },
  {
    image: 4,
    title: "Linkedin",
  },
  {
    image: 6,
    title: "Instagram",
  },
];

export const UsageInBrowserData = [
  {
    image: "chrome",
    name: "Google Chrome",
  },
  {
    image: "firefox",
    name: "Mozilla Firefox",
  },
  {
    image: "safari",
    name: "Safari(Web Browser)",
  },
];

export const ProductCartData = [
  {
    details: "Dummy text usedout print",
    quantity: "10",
    status: "Done",
    statusColor: "primary",
    price: "$6523",
    className: "badge-light-success",
  },
  {
    details: "Graphic or web designs",
    quantity: "20",
    status: "Pending",
    statusColor: "primary",
    price: "$6565",
    className: "badge-light-warning",
  },
  {
    details: "Attributed Passage",
    quantity: "40",
    status: "Done",
    statusColor: "primary",
    price: "$9361",
    className: "badge-light-success",
  },
  {
    details: "Unknown typesetter",
    quantity: "05",
    status: "In process",
    statusColor: "primary",
    price: "$2658",
    className: "badge-light-info",
  },
  {
    details: "Have scrambled",
    quantity: "08",
    status: "Pending",
    statusColor: "primary",
    price: "$6328",
    className: "badge-light-warning",
  },
  {
    details: "Type specimen",
    quantity: "12",
    status: "Pending",
    statusColor: "primary",
    price: "$4852",
    className: "badge-light-warning",
  },
];
export const EmployeeStatusData = [
  {
    image: "/2.jpg",
    title: "John Deo",
    online: "14+ online",
    position: "Designer",
    skill: "30%",
    experience: "2 year",
    classname: "primary",
  },
  {
    image: "/2.png",
    title: "Holio Mako",
    online: "250+ online",
    position: "Developer",
    skill: "70%",
    experience: "3 year",
    classname: "secondary",
  },
  {
    image: "/3.png",
    title: "Mohsib lara",
    online: "99+ online",
    position: "tester",
    skill: "60%",
    experience: "5 month",
    classname: "primary",
  },
  {
    image: "/10.jpg",
    title: "Hileri Soli",
    online: "150+ online",
    position: "Designer",
    skill: "25%",
    experience: "3 month",
    classname: "secondary",
  },
  {
    image: "/7.jpg",
    title: "Pusiz bia",
    online: "19+ online",
    position: "Developer",
    skill: "90%",
    experience: "5 year",
    classname: "primary",
  },
];
