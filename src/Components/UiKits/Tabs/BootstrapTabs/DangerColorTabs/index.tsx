import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DangerColor } from "@/Constant";
import { DangerTabsSubheading, TabNaneData } from "@/Data/UiKits/BootstrapTabs";
import { useState } from "react";
import { Card, CardBody, Col, Nav, TabContent, TabPane } from "reactstrap";
import CommonTabNav from "../../Common/CommonTabNav";

const DangerColorTabs = () => {
  const [dangerColorTab, setDangerColorTab] = useState("1");

  return (
    <Col sm="12" xl="6 ">
      <Card className="height-equal">
        <CommonCardHeader heading={DangerColor} subHeading={DangerTabsSubheading} />
        <CardBody>
          <Nav className="nav-danger">
            <CommonTabNav state={dangerColorTab} setState={setDangerColorTab} />
          </Nav>
          <TabContent activeTab={dangerColorTab}>
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

export default DangerColorTabs;
