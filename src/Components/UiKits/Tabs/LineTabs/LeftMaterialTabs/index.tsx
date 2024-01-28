import { useState } from "react";
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Href, MaterialLeftTab } from "@/Constant";
import { TabNaneData } from "@/Data/UiKits/BootstrapTabs";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LeftMaterialTabSubHeading } from "@/Data/UiKits/LineTabs";
import CommonTabNavWithoutIcons from "../../Common/CommonTabNavWithoutIcons";

const LeftMaterialTabs = () => {
  const [leftLineTab, setLeftLineTab] = useState("1");

  return (
    <Col sm="12" xl="6 ">
      <Card>
        <CommonCardHeader heading={MaterialLeftTab} subHeading={LeftMaterialTabSubHeading} />
        <CardBody>
          <Row>
            <Col sm="3" className="tabs-responsive-side">
              <Nav className="flex-column nav-pills border-tab nav-left">
                <CommonTabNavWithoutIcons state={leftLineTab} setState={setLeftLineTab} />
              </Nav>
            </Col>
            <Col sm="9">
              <TabContent activeTab={leftLineTab}>
                {TabNaneData.map((item, i) => (
                  <TabPane key={i} className="fade show" tabId={item.id}>
                    <p>{item.text}</p>
                  </TabPane>
                ))}
              </TabContent>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LeftMaterialTabs;
