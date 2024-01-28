import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import CustomStyleForm from "./CustomStyles";
import BrowserDefaultsForm from "./BrowserDefaults";
import FormSupportedElements from "./SupportedElements";
import CustomToolTipForm from "./FormToolTips";

const FormValidation = () => {
  return (
    <>
      <CommonBreadcrumb parent="Form Control" pageTitle="Form Validation" />
      <Container fluid>
        <Row>
          <CustomStyleForm />
          <BrowserDefaultsForm />
          <FormSupportedElements />
          <CustomToolTipForm />
        </Row>
      </Container>
    </>
  );
};

export default FormValidation;
