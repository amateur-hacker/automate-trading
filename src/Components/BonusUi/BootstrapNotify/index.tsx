import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import BasicNotify from "./BasicNotify";
import CustomDirectionNotify from "./CustomDirectionNotify";
import AutoCloseNotify from "./AutoCloseNotify";

const Notify = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Bootstrap Notify" parent="Bonus Ui" />
      <Container fluid>
        <Row>
          <BasicNotify />
          <CustomDirectionNotify />
          <AutoCloseNotify />
        </Row>
      </Container>
    </>
  );
};

export default Notify;
