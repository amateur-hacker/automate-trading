import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import {  PillTabsWithIcon} from "@/Constant";
import { TabNaneData } from "@/Data/UiKits/BootstrapTabs";
import { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import CommonTabNav from "../../Common/CommonTabNav";

const PillTabWithIcon = () => {
  const [pillWithIconTab, setPillWithIconTab] = useState("1");

  return (
    <Col sm="12" xl="6 ">
      <Card className="height-equal">
        <CommonCardHeader heading={PillTabsWithIcon} />
        <CardBody>
          <Nav pills color="primary">
            <CommonTabNav state={pillWithIconTab} setState={setPillWithIconTab} />
          </Nav>
          <TabContent activeTab={pillWithIconTab}>
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

export default PillTabWithIcon;
