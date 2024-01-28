import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { PillTabs } from "@/Constant";
import { TabNaneData } from "@/Data/UiKits/BootstrapTabs";
import { useState } from "react";
import { Card, CardBody, Col, Nav, TabContent, TabPane } from "reactstrap";
import CommonTabNavWithoutIcons from "../../Common/CommonTabNavWithoutIcons";

const PillTab = () => {
  const [pillTab, setPillTab] = useState("1");

  return (
    <Col sm="12" xl="6  box-col-12">
      <Card>
        <CommonCardHeader heading={PillTabs} />
        <CardBody>
          <Nav pills color="primary">
            <CommonTabNavWithoutIcons setState={setPillTab} state={pillTab} />
          </Nav>
          <TabContent activeTab={pillTab}>
            {TabNaneData.map((item, i) => (
              <TabPane key={i} tabId={item.id}>
                <p className="mb-0 m-t-30">{item.text}</p>
              </TabPane>
            ))}
          </TabContent>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillTab;
