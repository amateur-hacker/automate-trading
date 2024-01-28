import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TabsWithIcon } from "@/Constant";
import { TabNaneData } from "@/Data/UiKits/BootstrapTabs";
import { useState } from "react";
import { Card, CardBody, Col, Nav, TabContent, TabPane } from "reactstrap";
import CommonTabNav from "../../Common/CommonTabNav";

const WithIconTabs = () => {
  const [iconWithTab, setIconWithTab] = useState("1");
  return (
    <Col sm="12" xl="6 ">
      <Card>
        <CommonCardHeader heading={TabsWithIcon} />
        <CardBody>
          <Nav tabs>
            <CommonTabNav state={iconWithTab} setState={setIconWithTab} />
          </Nav>
          <TabContent activeTab={iconWithTab}>
            {TabNaneData.slice(0, 3).map((item, i) => (
              <TabPane key={i} className="fade show" tabId={item.id}>
                <p className="mb-0 mt-4">{item.text}</p>
              </TabPane>
            ))}
          </TabContent>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithIconTabs;
