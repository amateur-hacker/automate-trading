import { useState } from "react";
import { Card, CardBody, Col, Nav, TabContent, TabPane } from "reactstrap";
import { MaterialColorTab } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import CommonTabNav from "../../Common/CommonTabNav";
import { TabNaneData } from "@/Data/UiKits/BootstrapTabs";
import { MaterialSecondaryTabSubHeading } from "@/Data/UiKits/LineTabs";

const MaterialSecondaryColorTab = () => {
  const [secondaryColorLineTab, setSecondaryColorLineTab] = useState("1");
  return (
    <Col sm="12" xl="6 xl-100">
      <Card>
        <CommonCardHeader heading={MaterialColorTab} subHeading={MaterialSecondaryTabSubHeading} />
        <CardBody>
          <Nav className="border-tab nav-secondary" tabs>
            <CommonTabNav state={secondaryColorLineTab} setState={setSecondaryColorLineTab} />
          </Nav>
          <TabContent activeTab={secondaryColorLineTab}>
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

export default MaterialSecondaryColorTab;
