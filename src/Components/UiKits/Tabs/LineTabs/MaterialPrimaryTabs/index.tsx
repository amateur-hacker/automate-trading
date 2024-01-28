import { useState } from "react";
import { Card, CardBody, Col, Nav, TabContent, TabPane } from "reactstrap";
import { MaterialColorTab } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import CommonTabNav from "../../Common/CommonTabNav";
import { TabNaneData } from "@/Data/UiKits/BootstrapTabs";
import { MaterialPrimaryTabSubHeading } from "@/Data/UiKits/LineTabs";

const MaterialPrimaryColorTab = () => {
  const [primaryColorLineTab, setPrimaryColorLineTab] = useState("1");
  return (
    <Col sm="12" xl="6 xl-100">
      <Card>
        <CommonCardHeader heading={MaterialColorTab} subHeading={MaterialPrimaryTabSubHeading} />
        <CardBody>
          <Nav className="border-tab nav-primary" tabs>
            <CommonTabNav state={primaryColorLineTab} setState={setPrimaryColorLineTab} />
          </Nav>
          <TabContent activeTab={primaryColorLineTab}>
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

export default MaterialPrimaryColorTab;
