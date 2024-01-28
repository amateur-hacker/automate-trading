import { ImagePath } from "@/Constant";
import { Book, Briefcase, Droplet, Heart, MapPin } from "react-feather";

export const TourUseProfileIcon = [<i className="fa fa-facebook"></i>, <i className="fa fa-google-plus"></i>, <i className="fa fa-twitter"></i>, <i className="fa fa-instagram"></i>, <i className="fa fa-rss"></i>];

export const AboutMeData = [
  {
    icon: <Briefcase />,
    designation: "UX desginer at Pixelstrap",
    place: "banglore - 2023",
  },
  {
    icon: <Book />,
    designation: "studied computer science",
    place: "at london univercity - 2015",
  },
  {
    icon: <Heart />,
    designation: "relationship status",
    place: "single",
  },
  {
    icon: <MapPin />,
    designation: "lived in london",
    place: "last 5 year",
  },
  {
    icon: <Droplet />,
    designation: "blood group",
    place: "O+ positive",
  },
];

export const FollowersData = [
  {
    img: `${ImagePath}/user/2.jpg`,
    name: "Bucky Barnes",
  },
  {
    img: `${ImagePath}/user/3.png`,
    name: "Sarah Loren",
  },
  {
    img: `${ImagePath}/user/4.jpg`,
    name: "Jason Borne",
  },
  {
    img: `${ImagePath}/user/10.jpg`,
    name: "Comeren Diaz",
  },
  {
    img: `${ImagePath}/user/11.png`,
    name: "Andew Jon",
  },
];

export const FollowingsData = [
  {
    img: `${ImagePath}/user/3.png`,
    name: "Sarah Loren",
  },
  {
    img: `${ImagePath}/user/2.png`,
    name: "Bucky Barnes",
  },
  {
    img: `${ImagePath}/user/10.jpg`,
    name: "Comeren Diaz",
  },
  {
    img: `${ImagePath}/user/11.png`,
    name: "Jason Borne",
  },
  {
    img: `${ImagePath}/user/3.png`,
    name: "Andew Jon",
  },
];

export const LatestPhotosData = [`${ImagePath}/social-app/post-1.png`, `${ImagePath}/social-app/post-2.png`, `${ImagePath}/social-app/post-3.png`, `${ImagePath}/social-app/post-4.png`, `${ImagePath}/social-app/post-5.png`, `${ImagePath}/social-app/post-6.png`, `${ImagePath}/social-app/post-7.png`, `${ImagePath}/social-app/post-8.png`];

export const FriendsData = [`${ImagePath}/social-app/post-6.png`, `${ImagePath}/social-app/post-7.png`, `${ImagePath}/social-app/post-8.png`, `${ImagePath}/user/3.png`, `${ImagePath}/user/2.png`, `${ImagePath}/user/10.jpg`, `${ImagePath}/user/3.png`, `${ImagePath}/social-app/post-1.png`, `${ImagePath}/social-app/post-2.png`, `${ImagePath}/social-app/post-3.png`, `${ImagePath}/social-app/post-4.png`];

export const Steps = [
  {
    selector: ".step1",
    content: "This is Profile image",
  },
  {
    selector: ".step2",
    content: "Change Profile image here",
  },
  {
    selector: ".step3",
    content: "This is your Social details",
  },
  {
    selector: ".step4",
    content: "This is your Your detail",
  },
  {
    selector: ".step5",
    content: "This is the your first Post",
  },
  {
    selector: ".step6",
    content: "This is the your Last Post",
  },
];
