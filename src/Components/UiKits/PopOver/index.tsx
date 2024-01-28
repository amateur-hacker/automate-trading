"use client ";
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import Basic from "./BasicPopover";
import Directions from "./DirectionPopover";
import HtmlContents from "./HtmlContentPopover";
import Offset from "./OffsetPopover";

const PopOver = () => {
  return (
    <>
      <CommonBreadcrumb parent="Ui Kits" pageTitle="Popover" />
      <Container fluid>
        <Row className="popover-main">
          <Basic />
          <Directions />
          <HtmlContents />
          <Offset />
        </Row>
      </Container>
    </>
  );
};

export default PopOver;
