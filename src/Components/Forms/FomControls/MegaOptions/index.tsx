import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import DefaultMegaOptions from "./DefaultMegaOptions";
import NoBorderMegaOptions from "./NoBorderMegaOptions";
import SolidBorderMegaOptions from "./SolidBorderMegaOptions";
import OfferBorderMegaOptions from "./OfferBorderMegaOptions";
import InlineStyleMegaOptions from "./InlineStyleMegaOptions";
import VerticalStyleMegaOptions from "./VerticalsStyleMegaOptions";
import HorizontalStyleMegaOptions from "./HorizontalStyleMegaOptions";

const MegaOptions = () => {
  return (
    <>
      <CommonBreadcrumb parent="Form Control" pageTitle="Mega Option" />
      <Container fluid>
        <Row>
          <DefaultMegaOptions />
          <NoBorderMegaOptions />
          <SolidBorderMegaOptions />
          <OfferBorderMegaOptions />
          <InlineStyleMegaOptions />
          <VerticalStyleMegaOptions />
          <HorizontalStyleMegaOptions/>
        </Row>
      </Container>
    </>
  );
};

export default MegaOptions;
