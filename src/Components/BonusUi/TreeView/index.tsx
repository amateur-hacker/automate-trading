import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import BasicTreeView from "./BasicTreeView";
import CheckboxTreeView from "./CheckboxTreeView";
import LazyLoadingTreeView from "./LazyLoadingTreeView";
import RemoveItemTreeView from "./EditDeleteTreeView";

const TreeView = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Tree View" parent="Bonus Ui" />
      <Container fluid>
        <Row>
          <BasicTreeView />
          <CheckboxTreeView />
          <LazyLoadingTreeView />
          <RemoveItemTreeView />
        </Row>
      </Container>
    </>
  );
};

export default TreeView;
