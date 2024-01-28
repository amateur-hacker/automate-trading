import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import JavascriptMode from "./JavascriptMode";
import HtmlMode from "./HTMLMode";
import CssMode from "./CSSMode";
import JavaMode from "./JavaMode";
const ACEEditor = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="ACE Editor" parent="Editor" />
      <Container fluid>
        <Row>
          <JavascriptMode />
          <HtmlMode />
          <CssMode />
          <JavaMode />
        </Row>
      </Container>
    </>
  );
};

export default ACEEditor;
