import { Href } from "@/Constant";
import { CommonDashboardDropDownProps } from "@/Type/Dashboard";
import { MoreHorizontal } from "react-feather";

const CommonDashboardDropDown = ({ items }: CommonDashboardDropDownProps) => {
  return (
    <div className="icon-box onhover-dropdown">
      <MoreHorizontal />
      <div className="icon-box-show onhover-show-div">
        <ul>
          {items.map((item, i) => (
            <li key={i}>
              <a href={Href}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommonDashboardDropDown;
