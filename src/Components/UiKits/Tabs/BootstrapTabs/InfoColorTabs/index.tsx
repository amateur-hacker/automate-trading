import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { InfoColor } from "@/Constant";
import { InfoTabsSubheading, TabNaneData } from "@/Data/UiKits/BootstrapTabs";
import { useState } from "react";
import { Card, CardBody, Col, Nav, TabContent, TabPane } from "reactstrap";
import CommonTabNav from "../../Common/CommonTabNav";

const InfoColorTabs = () => {
  const [infoColorTab, setInfoColorTab] = useState("1");

  return (
    <Col sm="12" xl="6 ">
      <Card className="height-equal">
        <CommonCardHeader heading={InfoColor} subHeading={InfoTabsSubheading} />
        <CardBody>
          <Nav className="nav-info">
            <CommonTabNav state={infoColorTab} setState={setInfoColorTab} />
          </Nav>
          <TabContent activeTab={infoColorTab}>
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

export default InfoColorTabs;
