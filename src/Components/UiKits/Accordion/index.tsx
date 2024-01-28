import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import BasicAccordions from "./BasicAccordion";
import AllCloseAccordions from "./AllCloseAccordion";
import PrimaryColorAccordion from "./PrimaryColorAccordion";
import SecondaryColorAccordion from "./SecondaryColorAccordion";
import WithIconAccordion from "./WithIconAccordion";
import WithOpenCloseAccordion from "./WithOpenCloseAccordion";

const Accordion = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Accordion" parent="Ui Kits" />
      <Container fluid>
        <Row>
          <BasicAccordions />
          <AllCloseAccordions />
          <PrimaryColorAccordion />
          <SecondaryColorAccordion />
          <WithIconAccordion />
          <WithOpenCloseAccordion />
        </Row>
      </Container>
    </>
  );
};

export default Accordion;
