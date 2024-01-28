import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TabsBottomLeftAlign } from "@/Constant";
import { TabNaneData } from "@/Data/UiKits/BootstrapTabs";
import { useState } from "react";
import { Card, CardBody, Col, Nav, TabContent, TabPane } from "reactstrap";
import CommonTabNav from "../../Common/CommonTabNav";

const BottomLeftAlignTabs = () => {
  const [BottomTab, setBottomTab] = useState("1");

  return (
    <Col sm="12" xl="6 ">
      <Card>
        <CommonCardHeader heading={TabsBottomLeftAlign} />
        <CardBody>
          <TabContent activeTab={BottomTab}>
            {TabNaneData.slice(0, 3).map((item, i) => (
              <TabPane key={i} tabId={item.id}>
                <p className="mb-0 mb-4">{item.text}</p>
              </TabPane>
            ))}
          </TabContent>
          <Nav tabs className="nav-bottom">
            <CommonTabNav state={BottomTab} setState={setBottomTab} />
          </Nav>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BottomLeftAlignTabs;
