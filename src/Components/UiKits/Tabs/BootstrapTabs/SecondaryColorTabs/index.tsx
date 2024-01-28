import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SecondaryColor } from "@/Constant";
import { SecondaryTabsSubheading, TabNaneData } from "@/Data/UiKits/BootstrapTabs";
import { useState } from "react";
import { Card, CardBody, Col, Nav, TabContent, TabPane } from "reactstrap";
import CommonTabNav from "../../Common/CommonTabNav";

const SecondaryColorTabs = () => {
  const [secondaryColorTab, setSecondaryColorTab] = useState("1");

  return (
    <Col sm="12" xl="6 ">
      <Card className="height-equal">
        <CommonCardHeader heading={SecondaryColor} subHeading={SecondaryTabsSubheading} />
        <CardBody>
          <Nav className="nav-secondary">
            <CommonTabNav state={secondaryColorTab} setState={setSecondaryColorTab} />
          </Nav>
          <TabContent activeTab={secondaryColorTab}>
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

export default SecondaryColorTabs;
