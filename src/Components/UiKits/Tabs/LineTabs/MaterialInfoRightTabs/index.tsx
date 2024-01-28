import { useState } from "react";
import { Card, CardBody, Col, Nav, NavLink, Row, TabContent, TabPane } from "reactstrap";
import { MaterialStyleRightTab } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TabNaneData } from "@/Data/UiKits/BootstrapTabs";
import CommonTabNavWithoutIcons from "../../Common/CommonTabNavWithoutIcons";
import { MaterialInfoColorTabSuccess } from "@/Data/UiKits/LineTabs";

const MaterialInfoColorTab = () => {
  const [infoRightLineTab, setInfoLeftLineTab] = useState("1");
  return (
    <Col sm="12" xl="6 ">
      <Card>
        <CommonCardHeader heading={MaterialStyleRightTab} subHeading={MaterialInfoColorTabSuccess} />
        <CardBody>
          <Row>
            <Col sm="9">
              <TabContent activeTab={infoRightLineTab}>
                {TabNaneData.map((item, i) => (
                  <TabPane key={i} tabId={item.id}>
                    <p>{item.text}</p>
                  </TabPane>
                ))}
              </TabContent>
            </Col>
            <Col sm="3" className="tabs-responsive-side">
              <Nav className="flex-column nav-info border-tab nav-right">
                <CommonTabNavWithoutIcons state={infoRightLineTab} setState={setInfoLeftLineTab} />
              </Nav>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MaterialInfoColorTab;
