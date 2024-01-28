import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TabsVertical } from "@/Constant";
import { TabNaneData } from "@/Data/UiKits/BootstrapTabs";
import { useState } from "react";
import { Card, CardBody, Col, Nav, Row, TabContent, TabPane } from "reactstrap";
import CommonTabNav from "../../Common/CommonTabNav";

const VerticalTabs = () => {
  const [verticalTab, setVerticalTab] = useState("1");

  return (
    <Col sm="12" xl="6 box-col-12">
      <Card>
        <CommonCardHeader heading={TabsVertical} />
        <CardBody>
          <Row>
            <Col sm="3" xs="12">
              <Nav color="primary" pills className=" flex-column ">
                <CommonTabNav state={verticalTab} setState={setVerticalTab} />
              </Nav>
            </Col>
            <Col sm="9" xs="12">
              <TabContent activeTab={verticalTab}>
                {TabNaneData.map((item, i) => (
                  <TabPane key={i} tabId={item.id}>
                    <p>{item.text}</p>
                  </TabPane>
                ))}
              </TabContent>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticalTabs;
