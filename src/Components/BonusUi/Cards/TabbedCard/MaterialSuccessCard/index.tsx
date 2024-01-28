import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Contact, HomeText, Href, MaterialTabWithColor, Profile } from "@/Constant";
import { TabCardData } from "@/Data/BonusUi/Cards";
import { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

const MaterialSuccessCard = () => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <>
      {TabCardData.map((item, i) => (
        <Col lg="12" xl="6" className="box-col-12 xl-100" key={i}>
          <Card>
            <CommonCardHeader heading={MaterialTabWithColor} />
            <CardBody className="pt-0">
              <div className="tabbed-card">
                <Nav className="pull-right nav nav-tabs border-tab nav-success">
                  <NavItem>
                    <NavLink href={Href} className={activeTab === "1" ? "active" : ""} onClick={() => setActiveTab("1")}>
                      <i className="icofont icofont-ui-home" />
                      {HomeText}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href={Href} className={activeTab === "2" ? "active" : ""} onClick={() => setActiveTab("2")}>
                      <i className="icofont icofont-man-in-glasses" />
                      {Profile}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href={Href} className={activeTab === "3" ? "active" : ""} onClick={() => setActiveTab("3")}>
                      <i className="icofont icofont-contacts" />
                      {Contact}
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <p className="mb-0 mt-5">{item.paragraph1}</p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0 mt-5">{item.paragraph2}</p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0 mt-5">{item.paragraph3}</p>
                  </TabPane>
                </TabContent>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default MaterialSuccessCard;
