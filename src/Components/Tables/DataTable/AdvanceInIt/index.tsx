import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import RowCreateCallback from "./RowCreatingCallback";
import StockResult from "./StockResult";

const AdvanceInIt = () => {
  return (
    <>
      <CommonBreadcrumb parent="Data Tables" pageTitle="Advanced Data Tables" />
      <Container fluid>
        <Row>
          <StockResult />
          <RowCreateCallback />
        </Row>
      </Container>
    </>
  );
};

export default AdvanceInIt;
