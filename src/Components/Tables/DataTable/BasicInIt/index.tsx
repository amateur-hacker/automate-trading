import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import ZeroConfiguration from "./ZeroConfigTables";
import StateSaving from "./StateSaving";
import ScrollVerticalDynamicHeight from "./ScrollVerticalDynamicHeight";

const BasicInIt = () => {
  return (
    <>
      <CommonBreadcrumb parent="Data Table" pageTitle="Basic Data Tables" />
      <Container fluid>
        <Row>
          <ZeroConfiguration />
          <StateSaving />
          <ScrollVerticalDynamicHeight />
        </Row>
      </Container>
    </>
  );
};

export default BasicInIt;
