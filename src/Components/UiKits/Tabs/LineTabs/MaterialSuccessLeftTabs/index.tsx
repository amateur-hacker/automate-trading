import { useState } from "react";
import { Card, CardBody, Col, Nav, NavLink, Row, TabContent, TabPane } from "reactstrap";
import { Javascript, MaterialStyleLeftTab } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TabNaneData } from "@/Data/UiKits/BootstrapTabs";
import CommonTabNavWithoutIcons from "../../Common/CommonTabNavWithoutIcons";
import { MaterialSuccessColorTabSuccess } from "@/Data/UiKits/LineTabs";

const MaterialSuccessColorTab = () => {
  const [successLeftLineTab, setSuccessLeftLineTab] = useState("1");
  return (
    <Col sm="12" xl="6 ">
      <Card>
        <CommonCardHeader heading={MaterialStyleLeftTab} subHeading={MaterialSuccessColorTabSuccess} />
        <CardBody>
          <Row>
            <Col sm="3" className="tabs-responsive-side">
              <Nav pills id="v-pills-success-tab" className="flex-column nav-success border-tab nav-left">
                <CommonTabNavWithoutIcons state={successLeftLineTab} setState={setSuccessLeftLineTab} />
              </Nav>
            </Col>
            <Col sm="9">
              <TabContent activeTab={successLeftLineTab}>
                {TabNaneData.map((item, i) => (
                  <TabPane key={i} tabId={item.id}>
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

export default MaterialSuccessColorTab;
