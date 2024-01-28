import React from "react";
import { ShoppingBag } from "react-feather";
import { CartTitle, Href } from "@/Constant";
export const CartHeading = () => {
  return (
    <div className="dropdown-title">
      <h3>{CartTitle} </h3>
      <a className="f-right" href={Href}>
          <ShoppingBag />
      </a>
    </div>
  );
};
