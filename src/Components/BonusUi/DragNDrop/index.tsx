import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import ClickAndDragComponent from "./ClickAndDrag";
import SpillDragAndDrop from "./SpillDragAndDrop";
import CopyDragAndDrop from "./CopyDragAndDrop";

const DragAndDrop = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Drag And Drop" parent="Bonus Ui" />
      <Container fluid>
        <Row>
          <ClickAndDragComponent />
          <SpillDragAndDrop />
          <CopyDragAndDrop />
        </Row>
      </Container>
    </>
  );
};

export default DragAndDrop;
