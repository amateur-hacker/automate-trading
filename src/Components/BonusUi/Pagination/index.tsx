import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import BasicPagination from "./BasicPagination";
import PaginationWithIcon from "./WithIconsPagination";
import PaginationAlignments from "./AlignmentPagination";
import ActiveDisabledPagination from "./ActiveAndDisabledPagination";
import ColorPagination from "./ColorPagination";
import SizingPagination from "./PaginationSizing";

const Pagination = () => {
  return (
    <>
      <CommonBreadcrumb parent="Bonus Ui" pageTitle="Pagination" />
      <Container fluid>
        <Row>
          <BasicPagination />
          <PaginationWithIcon />
          <PaginationAlignments />
          <ActiveDisabledPagination />
          <ColorPagination />
          <SizingPagination />
        </Row>
      </Container>
    </>
  );
};

export default Pagination;
