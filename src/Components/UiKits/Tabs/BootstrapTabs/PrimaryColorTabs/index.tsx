import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { PrimaryColor } from "@/Constant";
import { PrimaryTabsSubheading, TabNaneData } from "@/Data/UiKits/BootstrapTabs";
import { useState } from "react";
import { Card, CardBody, Col, Nav, TabContent, TabPane } from "reactstrap";
import CommonTabNav from "../../Common/CommonTabNav";

const PrimaryColorTabs = () => {
  const [primaryColorTab, setPrimaryColorTab] = useState("1");

  return (
    <Col sm="12" xl="6">
      <Card className="height-equal">
        <CommonCardHeader heading={PrimaryColor} subHeading={PrimaryTabsSubheading} />
        <CardBody>
          <Nav className="nav-primary">
            <CommonTabNav state={primaryColorTab} setState={setPrimaryColorTab} />
          </Nav>
          <TabContent activeTab={primaryColorTab}>
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

export default PrimaryColorTabs;
