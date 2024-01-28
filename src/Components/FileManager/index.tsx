import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import LeftFileManager from "./LeftFileManager";
import RightFileManager from "./RightFileManager";

const FileManager = () => {
  return (
    <>
      <CommonBreadcrumb parent="File Manager" pageTitle="File Manager" />
      <Container fluid>
        <Row>
          <LeftFileManager />
          <RightFileManager />
        </Row>
      </Container>
    </>
  );
};

export default FileManager;
