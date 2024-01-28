import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { HomeText, JavaScriptBehavior, Messages, Profile, Settings } from "@/Constant";
import { useState } from "react";
import { Card, CardBody, Col, ListGroup, ListGroupItem, Row, TabContent, TabPane } from "reactstrap";

const JavascriptBehaviorLists = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <Col sm="12" xl="12">
      <Card>
        <CommonCardHeader heading={JavaScriptBehavior} />
        <CardBody>
          <Row>
            <Col sm="4">
              <ListGroup>
                <ListGroupItem tag={"li"} className={activeTab === "1" ? " bg-primary" : ""} onClick={() => setActiveTab("1")}>
                  {HomeText}
                </ListGroupItem>

                <ListGroupItem tag={"li"} className={activeTab === "2" ? " bg-primary" : ""} onClick={() => setActiveTab("2")}>
                  {Profile}
                </ListGroupItem>

                <ListGroupItem tag={"li"} className={activeTab === "3" ? " bg-primary" : ""} onClick={() => setActiveTab("3")}>
                  {Messages}
                </ListGroupItem>

                <ListGroupItem tag={"li"} className={activeTab === "4" ? " bg-primary" : ""} onClick={() => setActiveTab("4")}>
                  {Settings}
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col sm="8">
              <TabContent activeTab={activeTab} id="nav-tabContent">
                <TabPane tabId="1">
                  {
                    "1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                  }
                </TabPane>
                <TabPane tabId="2">
                  {
                    "2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                  }
                </TabPane>
                <TabPane tabId="3">
                  {
                    "3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                  }
                </TabPane>
                <TabPane tabId="4">
                  {
                    "4. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                  }
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JavascriptBehaviorLists;
