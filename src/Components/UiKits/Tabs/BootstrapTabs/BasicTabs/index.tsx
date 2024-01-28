import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicTabs, Href } from "@/Constant";
import { TabNaneData } from "@/Data/UiKits/BootstrapTabs";
import { useState } from "react";
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

const BasicTab = () => {
  const [BasicTab, setBasicTab] = useState("1");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Col sm="12" xl="6 ">
      <Card>
        <CommonCardHeader heading={BasicTabs} />
        <CardBody>
          <Nav tabs>
            <NavItem>
              <NavLink href={Href} className={BasicTab === "1" ? "active" : ""} onClick={() => setBasicTab("1")}>
                Home
              </NavLink>
            </NavItem>
            <Dropdown className="nav-item" isOpen={dropdownOpen} toggle={toggle}>
              <NavItem>
                <DropdownToggle className="nav-link" tag="a" href={Href} color="default" caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <NavLink href={Href} className={BasicTab === "2" ? "active" : ""} onClick={() => setBasicTab("2")}>
                    Action
                  </NavLink>
                  <DropdownItem href={Href}>Another action</DropdownItem>
                  <DropdownItem href={Href}>Something else here</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href={Href}>Separated link</DropdownItem>
                </DropdownMenu>
              </NavItem>
            </Dropdown>
            <NavItem>
              <NavLink href={Href} className={BasicTab === "3" ? "active" : ""} onClick={() => setBasicTab("3")}>
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Href} className={BasicTab === "4" ? "active" : ""} onClick={() => setBasicTab("4")}>
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={BasicTab}>
            {TabNaneData.map((item, i) => (
              <TabPane key={i} tabId={item.id}>
                <p className="mb-0 m-t-30">{item.text}</p>
              </TabPane>
            ))}
          </TabContent>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTab;
