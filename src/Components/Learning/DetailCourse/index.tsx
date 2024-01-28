import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import TopDetailCourse from "./TopDetailCourse";
import Comments from "./Comment";
import RightLearning from "../Common/RightLearningList";

const DetailCourse = () => {
  return (
    <>
      <CommonBreadcrumb parent="Learning" pageTitle="Detailed Course" />
      <Container fluid>
        <Row className="learning-block">
          <Col xl="9" className="box-col-8 ">
            <div className="blog-single">
              <TopDetailCourse />
              <Comments />
            </div>
          </Col>
          <RightLearning />
        </Row>
      </Container>
    </>
  );
};

export default DetailCourse;
