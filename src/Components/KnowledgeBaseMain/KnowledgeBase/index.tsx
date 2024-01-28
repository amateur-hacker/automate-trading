import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import Header from "../Common/HeaderKnowledgeBase";
import Articles from "../Common/Articles";
import Courses from "./Courses";

const KnowledgeBase = () => {
  return (
    <>
      <CommonBreadcrumb parent="Knowledge Base" pageTitle="Knowledge Base" />
      <Container fluid>
        <Row>
          <Header />
          <Articles />
          <Courses />
        </Row>
      </Container>
    </>
  );
};

export default KnowledgeBase;
