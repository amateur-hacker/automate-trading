import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import AjaxSourcedData from "./AjaxSourceData";
import HtmlSourcedData from "./HtmlSourcedData";
import JavaScriptSourcedData from "./JavascriptSourceData";
import ServerSideProcessing from "./ServerSide";

const DataSources = () => {
  return (
    <>
      <CommonBreadcrumb parent="Data Table " pageTitle="Data Sources" />
      <Container fluid>
        <Row>
          <HtmlSourcedData />
          <AjaxSourcedData />
          <JavaScriptSourcedData />
          <ServerSideProcessing />
        </Row>
      </Container>
    </>
  );
};

export default DataSources;
