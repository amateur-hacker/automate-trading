import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import TopLearningList from "./TopLearningDetail";
import BottomLearningList from "./BottomLearningDetails";
import RightLearningList from "../Common/RightLearningList";

const LearningList = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Learning List" parent="Learning" />
      <Container fluid>
        <Row className="learning-block">
          <Col xl="9">
            <Row>
              <TopLearningList />
              <BottomLearningList />
            </Row>
          </Col>
          <RightLearningList />
        </Row>
      </Container>
    </>
  );
};

export default LearningList;
