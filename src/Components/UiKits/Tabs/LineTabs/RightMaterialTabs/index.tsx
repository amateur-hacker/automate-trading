import { useState } from "react";
import { Card, CardBody, Row, Col, Nav, TabContent, TabPane } from "reactstrap";
import { MaterialRightTab } from "@/Constant";
import { TabNaneData } from "@/Data/UiKits/BootstrapTabs";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { RightMaterialTabSubHeading } from "@/Data/UiKits/LineTabs";
import CommonTabNavWithoutIcons from "../../Common/CommonTabNavWithoutIcons";

const RightMaterialTabs = () => {
  const [rightLineTab, setRightLineTab] = useState("1");

  return (
    <Col sm="12" xl="6 xl-100">
      <Card>
        <CommonCardHeader heading={MaterialRightTab} subHeading={RightMaterialTabSubHeading} />
        <CardBody>
          <Row>
            <Col sm="9">
              <TabContent activeTab={rightLineTab}>
                {TabNaneData.map((item, i) => (
                  <TabPane key={i} className="fade show" tabId={item.id}>
                    <p>{item.text}</p>
                  </TabPane>
                ))}
              </TabContent>
            </Col>
            <Col sm="3" className="tabs-responsive-side">
              <Nav pills className="flex-column border-tab nav-right">
                <CommonTabNavWithoutIcons state={rightLineTab} setState={setRightLineTab} />
              </Nav>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RightMaterialTabs;
