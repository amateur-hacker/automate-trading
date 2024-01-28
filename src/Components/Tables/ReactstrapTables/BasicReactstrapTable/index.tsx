import React from "react";
import { BasicTable } from "@/Constant";
import { Container, Row } from "reactstrap";
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import BasicTables from "./BasicTables";
import InverseTables from "./InverseTables";
import InversePrimaryTables from "./InversePrimaryTables";
import HoverableRow from "./HoverableRows";
import ContextualClass from "./ContextualClasses";
import TextOrBackgroundUtilities from "./TextOrBackgroundUtilities";
import TableHeadOption from "./TableHeadOptions";
import TableHeadOption2 from "./TableHeadOptions2";
import StripedRows from "./StripedRow";
import StripedInverse from "./StripedInverse";
import CaptionClass from "./Caption";
import BreakPointSpecific from "./BreakPointSpecific";
import ResponsiveTable from "./ResponsiveTables";

const BasicReactstrapTables = () => {
  return (
    <div className="fadeIn-enter-done">
      <CommonBreadcrumb pageTitle={BasicTable} parent="Tables" />
      <Container fluid className="default-table-header">
        <Row>
          <BasicTables />
          <InverseTables />
          <InversePrimaryTables />
          <HoverableRow />
          <ContextualClass />
          <TextOrBackgroundUtilities />
          <TableHeadOption />
          <TableHeadOption2 />
          <StripedRows />
          <StripedInverse />
          <CaptionClass />
          <ResponsiveTable/>
          <BreakPointSpecific />
        </Row>
      </Container>
    </div>
  );
};

export default BasicReactstrapTables;
