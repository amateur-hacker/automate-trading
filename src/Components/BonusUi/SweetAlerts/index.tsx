import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import BasicAlerts from "./BasicAlerts";
import AdvancedStateAlerts from "./AdvancedState/inde";
import StateAlerts from "./AlertStates";

const SweetAlerts = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Sweet Alert" parent="Bonus Ui" />
      <Container fluid>
        <Row>
          <BasicAlerts />
          <AdvancedStateAlerts />
          <StateAlerts />
        </Row>
      </Container>
    </>
  );
};

export default SweetAlerts;
