import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { SocialTabsData } from "@/Data/SocialApp";
import { useState } from "react";
import { Card, Col, Container, Input, InputGroup, InputGroupText, Nav, NavItem, NavLink, Row } from "reactstrap";
import TabContents from "./TabContents";
import TopSocialApp from "./TopSocialApp";

const SocialApp = () => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <>
      <CommonBreadcrumb parent="Social App" pageTitle="Social App" />
      <Container fluid>
        <div className="user-profile social-app-profile">
          <Row>
            <TopSocialApp />
            <Col sm="12 " className="box-col-12">
              <Card>
                <div className="social-tab">
                  <Nav tabs>
                    {SocialTabsData.map((item, i) => (
                      <NavItem key={i}>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={activeTab === item.id ? "active" : ""}
                          onClick={() => {
                            setActiveTab(item.id);
                          }}
                        >
                          {item.logo}
                          {item.title}
                        </NavLink>
                      </NavItem>
                    ))}
                  </Nav>
                  <InputGroup>
                    <Input type="text" placeholder="Search......." />
                    <InputGroupText>
                      <i className="fa fa-search"></i>
                    </InputGroupText>
                  </InputGroup>
                </div>
              </Card>
            </Col>
          </Row>
          <TabContents activeTab={activeTab} />
        </div>
      </Container>
    </>
  );
};

export default SocialApp;
