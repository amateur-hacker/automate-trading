import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container } from "reactstrap";
import { DoingProjectListData, DoneProjectListData } from "@/Data/Projects";
import { useAppSelector } from "@/Redux/Hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CheckCircle, Info, PlusCircle, Target } from "react-feather";
import { Button, Card, CardBody, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import CommonProjectList from "./CommonProjectList";

const ProjectList = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const sideToggle = useAppSelector((store) => store.projectSlice.items);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("1");
  return (
    <>
      <CommonBreadcrumb parent="Project" pageTitle="Project List" />
      <Container fluid>
        <Row className="project-cards">
          <Col md="12" className="project-list">
            <Card>
              <Row>
                <Col md="6">
                  <Nav tabs className="border-tab">
                    <NavItem>
                      <NavLink className={activeTab === "1" ? "active" : ""} onClick={() => setActiveTab("1")}>
                        <Target />
                        All
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className={activeTab === "2" ? "active" : ""} onClick={() => setActiveTab("2")}>
                        <Info />
                        Doing
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className={activeTab === "3" ? "active" : ""} onClick={() => setActiveTab("3")}>
                        <CheckCircle />
                        Done
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col md="6">
                  <Button color="primary" style={{ color: "white" }} onClick={() => router.push(`/${i18LangStatus}/project/createlist`)}>
                    <PlusCircle />
                    Create New Project
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardBody>
                <TabContent activeTab={activeTab} id="top-tabContent">
                  <TabPane tabId="1">
                    <CommonProjectList ProjectListData={sideToggle} />
                  </TabPane>
                  <TabPane tabId="2">
                    <CommonProjectList ProjectListData={DoingProjectListData} />
                  </TabPane>
                  <TabPane tabId="3">
                    <CommonProjectList ProjectListData={DoneProjectListData} />
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectList;
