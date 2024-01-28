import React from "react";
import { Container, Row } from "reactstrap";
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import DefaultStylingTable from "./DefaultStyling";
import TableHeadStyling from "./TableHeadOptionStyling";
import TableHeadPrimaryStyling from "./TableHeadPrimaryStyling";
import TableFooterStyling from "./TableFooterStyling";
import CustomTableColors from "./CustomTableColor";
import CustomHoverAndStriped from "./HoverAndStripedStyling";

const StylingTables = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Styling Table" parent="Tables" />
      <Container fluid className="default-table-header">
        <Row>
          <DefaultStylingTable />
          <TableHeadStyling />
          <TableHeadPrimaryStyling />
          <TableFooterStyling />
          <CustomTableColors />
          <CustomHoverAndStriped />
        </Row>
      </Container>
    </>
  );
};

export default StylingTables;
