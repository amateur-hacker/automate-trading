import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SimpleMaterialStyleTab } from "@/Constant";
import { useState } from "react";
import { Card, CardBody, Col, Nav, TabContent, TabPane } from "reactstrap";
import CommonTabNav from "../../Common/CommonTabNav";
import { TabNaneData } from "@/Data/UiKits/BootstrapTabs";
import { SimpleMaterialTabsSubHeading } from "@/Data/UiKits/LineTabs";

const SimpleMaterialTabs = () => {
  const [basicLineTab, setBasicLineTab] = useState("1");
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading={SimpleMaterialStyleTab} subHeading={SimpleMaterialTabsSubHeading} />
        <CardBody>
          <Nav className="border-tab" tabs>
            <CommonTabNav state={basicLineTab} setState={setBasicLineTab} />
          </Nav>
          <TabContent activeTab={basicLineTab}>
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

export default SimpleMaterialTabs;
