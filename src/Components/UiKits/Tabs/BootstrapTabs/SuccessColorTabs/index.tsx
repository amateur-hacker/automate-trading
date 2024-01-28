import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SuccessColor } from "@/Constant";
import { SuccessTabsSubheading, TabNaneData } from "@/Data/UiKits/BootstrapTabs";
import { useState } from "react";
import { Card, CardBody, Col, Nav, TabContent, TabPane } from "reactstrap";
import CommonTabNav from "../../Common/CommonTabNav";

const SuccessColorTabs = () => {
  const [successColorTab, setSuccessColorTab] = useState("1");

  return (
    <Col sm="12" xl="6 ">
      <Card className="height-equal">
        <CommonCardHeader heading={SuccessColor} subHeading={SuccessTabsSubheading} />
        <CardBody>
          <Nav className="nav-success">
            <CommonTabNav state={successColorTab} setState={setSuccessColorTab} />
          </Nav>
          <TabContent activeTab={successColorTab}>
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

export default SuccessColorTabs;
