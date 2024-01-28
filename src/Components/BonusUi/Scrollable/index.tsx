"use client";
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import VerticalScrollbar from "./VerticalScroll";
import BothSideScrollbar from "./BothSideScroll";
import HorizontalScrollbar from "./HorizontalScroll";
import NoScrollBar from "./NoScrollBar";

const Scrollable = () => {
  return (
    <>
      <CommonBreadcrumb parent="Bonus Ui" pageTitle="Scrollable" />
      <Container fluid>
        <Row>
          <BothSideScrollbar />
          <HorizontalScrollbar />
          <NoScrollBar />
          <VerticalScrollbar />
        </Row>
      </Container>
    </>
  );
};

export default Scrollable;
