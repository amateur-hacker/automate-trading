import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { PillDarkColor } from "@/Constant";
import { PillDarkTabSubHeading, TabNaneData } from "@/Data/UiKits/BootstrapTabs";
import { useState } from "react";
import { Card, CardBody, Col, Nav, TabContent, TabPane } from "reactstrap";
import CommonTabNav from "../../Common/CommonTabNav";

const PillDarkTab = () => {
  const [pillDarkTab, setPillDarkTab] = useState("1");

  return (
    <Col sm="12" xl="6 ">
      <Card className="height-equal">
        <CommonCardHeader heading={PillDarkColor} subHeading={PillDarkTabSubHeading} />
        <CardBody>
          <Nav className="nav-dark">
            <CommonTabNav state={pillDarkTab} setState={setPillDarkTab} />
          </Nav>
          <TabContent activeTab={pillDarkTab}>
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

export default PillDarkTab;
