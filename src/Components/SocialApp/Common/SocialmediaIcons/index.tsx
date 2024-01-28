import { Href } from "@/Constant";
import { SocialMediaIconsData } from "@/Data/SocialApp";
import {  SocialMediaIconsProps } from "@/Type/SocialApp";
import React from "react";

const SocialMediaIcons = (listClassName:SocialMediaIconsProps) => {
  return (
    <ul className="simple-list flex-row list-group card-social">
      {SocialMediaIconsData.map((item, i) => (
        <li className="list-group-item" key={i}>
          <a href={Href}>
            <i className={`fa ${item} me-0`}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaIcons;
