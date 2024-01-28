import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Email } from "@/Constant";
import { SetStateAction, useCallback, useState } from "react";
import { Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row, TabContent, TabPane } from "reactstrap";
import AllTabs from "./AllTab";
import ImagesTab from "./ImageTabs";
import SearchBarTab from "./SearchBarTab";
import VideoTabs from "./VideoTabs";

const SearchResult = () => {
  const [activeTab, setActiveTab] = useState("1");
  const callback = useCallback((tab: SetStateAction<string>) => {
    setActiveTab(tab);
  }, []);
  return (
    <>
      <CommonBreadcrumb parent="Search Result" pageTitle="Search Result" />
      <Container fluid={true} className="search-page">
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <Form className="search-form">
                  <FormGroup className="m-0">
                    <Label className="sr-only">{Email}</Label>
                  </FormGroup>
                  <FormGroup tag="div" className="mb-0">
                    <InputGroup>
                      <InputGroupText>
                        <i className="icon-search"></i>
                      </InputGroupText>
                      <Input className="form-control-plaintext" type="search" placeholder="Search.." />
                    </InputGroup>
                  </FormGroup>
                </Form>
              </CardHeader>
              <CardBody>
                <SearchBarTab callbackActive={callback} />
                <TabContent activeTab={activeTab} className="tab-content">
                  <TabPane tabId="1">
                    <AllTabs />
                  </TabPane>
                  <TabPane tabId="2">
                    <ImagesTab />
                  </TabPane>
                  <TabPane tabId="3">
                    <VideoTabs />
                  </TabPane>
                  <TabPane tabId="4"></TabPane>
                  <TabPane tabId="5"></TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SearchResult;
