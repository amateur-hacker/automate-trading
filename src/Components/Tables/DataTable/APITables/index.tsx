import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import AddRows from "./AddRows";
import ChildRows from "./ChildRows";
import RowSelectionAndDeletion from "./RowSelectionAndDeletion";
import CustomFiltering from "./CustomFiltering";

const APITables = () => {
  return (
    <>
      <CommonBreadcrumb parent="Data Table" pageTitle="API Data Tables" />
      <Container fluid>
        <Row>
          {/* <AddRows /> */}
          {/* <ChildRows /> */}
          <RowSelectionAndDeletion />
          {/* <CustomFiltering /> */}
        </Row>
      </Container>
    </>
  );
};

export default APITables;
