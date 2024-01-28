import { Href, ImagePath } from "@/Constant";
import { OrgListData } from "@/Data/Contacts";
import { NavOrgProps } from "@/Type/Contacts";
import Image from "next/image";
import { useState } from "react";
import { Col, Media, Nav, NavItem, NavLink } from "reactstrap";

const NavOrg = ({ callback }: NavOrgProps) => {
  const [orgActiveTab, setOrgActiveTab] = useState("1");
  return (
    <Col xl="4" md="5" className="xl-50">
      <Nav className="flex-column nav-pills" id="v-pills-tab1" role="tablist" aria-orientation="vertical">
        {OrgListData.map((item) => (
          <NavItem id="myTab" role="tablist" key={item.id}>
            <NavLink
              href={Href}
              className={orgActiveTab === item.activeTab ? "active" : ""}
              onClick={() => {
                setOrgActiveTab(item.activeTab);
                callback(item.activeTab);
              }}
            >
              <Media>
                <Image height={100} width={100} className="p-0 img-50 img-fluid m-r-20 rounded-circle" src={`${ImagePath}/${item.img}`} alt="" />
                <Media body>
                  <h6>{item.name}</h6>
                  <p>{item.email}</p>
                </Media>
              </Media>
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </Col>
  );
};

export default NavOrg;
