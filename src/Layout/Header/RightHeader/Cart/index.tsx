import React from "react";
import { CartBoxSvg } from "@/svgIcons";
import { Badge } from "reactstrap";
import { Checkout } from "./Checkout";
import {MainContent} from "./MainContent";
import { CartHeading } from "./CartHeading";

const Cart = () => {
  return (
    <li className="cart-nav onhover-dropdown list-group-item">
      <div className="cart-box">
        <CartBoxSvg />
        <Badge color="primary" className=" rounded-pill ">4</Badge>
      </div>
      <div className="cart-dropdown onhover-show-div">
        <CartHeading/>
        <ul className="simple-list border-top custom-scrollbar list-group">
           <MainContent/>
          <Checkout />
        </ul>
      </div>
    </li>
  );
};

export default Cart;
