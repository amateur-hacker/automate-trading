import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { WarningColor } from "@/Constant";
import { TabNaneData, WarningTabsSubheading } from "@/Data/UiKits/BootstrapTabs";
import { useState } from "react";
import { Card, CardBody, Col, Nav, TabContent, TabPane } from "reactstrap";
import CommonTabNav from "../../Common/CommonTabNav";

const WarningColorTabs = () => {
  const [warningColorTab, setWarningColorTab] = useState("1");

  return (
    <Col sm="12" xl="6">
      <Card className="height-equal">
        <CommonCardHeader heading={WarningColor} subHeading={WarningTabsSubheading} />
        <CardBody>
          <Nav className="nav-warning">
            <CommonTabNav state={warningColorTab} setState={setWarningColorTab} />
          </Nav>
          <TabContent activeTab={warningColorTab}>
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

export default WarningColorTabs;
