import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import DefaultBreadcrumb from "./DefaultBreadcrumb";
import NavBreadcrumb from "./NavBreadcrumb";
import ColoredBreadcrumb from "./ColoredBreadcrumb";

const Breadcrumb = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Breadcrumb" parent="Bonus Ui " />
      <Container fluid>
        <Row>
          <DefaultBreadcrumb />
          <NavBreadcrumb />
          <ColoredBreadcrumb />
        </Row>
      </Container>
    </>
  );
};

export default Breadcrumb;
