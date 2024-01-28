import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import ExtraLargeTable from "./ExtraLargeTable";
import LargeTables from "./LargeTables";
import DefaultTables from "./DefaultTables";
import SmallTables from "./SmallTables";
import ExtraSmallTables from "./ExtraSmallTables";

const SizingReactstrapTables = () => {
  return (
    <>
      <CommonBreadcrumb parent="Table" pageTitle="Sizing Table" />
      <Container fluid className="default-table-header">
        <Row>
          <ExtraLargeTable />
          <LargeTables />
          <DefaultTables />
          <SmallTables />
          <ExtraSmallTables />
        </Row>
      </Container>
    </>
  );
};

export default SizingReactstrapTables;
