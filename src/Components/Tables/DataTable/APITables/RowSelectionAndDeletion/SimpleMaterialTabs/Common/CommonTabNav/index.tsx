import { Href } from "@/Constant";
import { TabNavItemsData } from "@/Data/UiKits/BootstrapTabs";
import { CommonTabNavProps } from "@/Type/UiKits";
import { NavItem, NavLink } from "reactstrap";

const CommonTabNav = ({ state, setState }: CommonTabNavProps) => {
  return (
    <>
      {TabNavItemsData.map((item, i) => (
        <NavItem key={i}>
          <NavLink href={Href} className={state === `${item.id}` ? "active" : ""} onClick={() => setState(item.id)}>
            <>
              {item.icon}
              {item.text}
            </>
          </NavLink>
        </NavItem>
      ))}
    </>
  );
};

export default CommonTabNav;
