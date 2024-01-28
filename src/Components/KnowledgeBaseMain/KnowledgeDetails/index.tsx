import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import CategoriesKnowledge from "./Sidebar/Categories";
import MainCard from "./Main";

const KnowledgeDetails = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Knowledge Details" parent="Knowledge Base" />
      <Container fluid>
        <Row>
          <CategoriesKnowledge />
          <MainCard />
        </Row>
      </Container>
    </>
  );
};

export default KnowledgeDetails;
