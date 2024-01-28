import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import Post1 from "./Post1";
import BottomSection from "./BottomSection";
import RightSection from "./RightSection";

const BlogDetails = () => {
  return (
    <>
      <CommonBreadcrumb parent="Blog" pageTitle="Blog Details" />
      <Container fluid className="blog-page">
        <Row>
          <Post1 />
          <RightSection  />
          <BottomSection />
        </Row>
      </Container>
    </>
  );
};

export default BlogDetails;
