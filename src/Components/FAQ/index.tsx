import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import TopSectionFAQ from "./TopSectionFAQ";
import RightSectionFAQ from "./RightSectionFAQ";
import LeftSectionFAQ from "./LeftSectionFAQ";
import FeaturedTutorial from "./FeaturedTutorials";
import LatestArticles from "./LatestArticles";

const FAQ = () => {
  return (
    <>
      <CommonBreadcrumb parent="FAQ" pageTitle="FAQ" />
      <Container fluid className="faq-wrap">
        <Row>
          <TopSectionFAQ />
          <Col lg="12">
            <div className="header-faq">
              <h3 className="mb-0">Quick Questions are answered</h3>
            </div>
            <Row className="default-according style-1 faq-accordion" id="accordionoc">
              <LeftSectionFAQ />
              <RightSectionFAQ />
            </Row>
          </Col>
          <FeaturedTutorial />
          <LatestArticles />
        </Row>
      </Container>
    </>
  );
};

export default FAQ;
