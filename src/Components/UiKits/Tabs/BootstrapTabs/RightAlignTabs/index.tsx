import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TabsRightAlign } from "@/Constant";
import { TabNaneData } from "@/Data/UiKits/BootstrapTabs";
import { useState } from "react";
import { Card, CardBody, Col, Nav, TabContent, TabPane } from "reactstrap";
import CommonTabNav from "../../Common/CommonTabNav";

const RightAlign = () => {
  const [RightTab, setRightTab] = useState("1");

  return (
    <Col sm="12" xl="6 ">
      <Card>
        <CommonCardHeader heading={TabsRightAlign} />
        <CardBody>
          <Nav tabs className=" nav-right">
            <CommonTabNav state={RightTab} setState={setRightTab} />
          </Nav>
          <TabContent activeTab={RightTab}>
            {TabNaneData.map((item, i) => (
              <TabPane key={i} tabId={item.id}>
                <p className="mb-0 mt-4">{item.text}</p>
              </TabPane>
            ))}
          </TabContent>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RightAlign;
