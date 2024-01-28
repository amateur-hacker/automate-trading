import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import Articles from "../Common/Articles";
import HeaderKnowledgeBase from "../Common/HeaderKnowledgeBase";
import KnowledgeArticles from "./KnowledgeArticles";

const KnowledgeBaseCategory = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Knowledge Category" parent="Knowledge Base" />
      <Container fluid>
        <Row>
          <HeaderKnowledgeBase />
          <Articles />
          <KnowledgeArticles />
        </Row>
      </Container>
    </>
  );
};

export default KnowledgeBaseCategory;
