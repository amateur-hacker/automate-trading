import { Href } from "@/Constant";
import { TabNavWithoutIconData } from "@/Data/UiKits/BootstrapTabs";
import { CommonTabNavProps } from "@/Type/UiKits";
import React from "react";
import { NavItem, NavLink } from "reactstrap";

const CommonTabNavWithoutIcons = ({ state, setState }: CommonTabNavProps) => {
  return (
    <>
      {TabNavWithoutIconData.map((item, i) => (
        <NavItem key={i}>
          <NavLink href={Href} className={state === `${item.id}` ? "active" : ""} onClick={() => setState(item.id)}>
            <>{item.text}</>
          </NavLink>
        </NavItem>
      ))}
    </>
  );
};

export default CommonTabNavWithoutIcons;
