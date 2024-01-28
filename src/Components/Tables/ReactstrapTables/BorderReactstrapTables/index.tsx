import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import HorizontalBorderTable from "./HorizontalBorders";
import VerticalBorderTable from "./VerticalBorders";
import BothBorderTable from "./BothBorders";
import BorderLessTable from "./BorderlessTable";
import DefaultBorderTable from "./DefaultBorders";
import SolidBorderTable from "./SolidBorders";
import DoubleBorderTable from "./DoubleBorders";
import DottedBorderTable from "./DottedBorders";
import DashedBorderTable from "./DashedBorders";
import ColorBorderTable from "./ColorBorders";

const BorderTable = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Border Table" parent="Tables" />
      <Container fluid className="default-table-header">
        <Row>
          <HorizontalBorderTable />
          <VerticalBorderTable />
          <BothBorderTable />
          <BorderLessTable />
          <DefaultBorderTable />
          <SolidBorderTable />
          <DoubleBorderTable />
          <DottedBorderTable />
          <DashedBorderTable />
          <ColorBorderTable />
        </Row>
      </Container>
    </>
  );
};

export default BorderTable;
