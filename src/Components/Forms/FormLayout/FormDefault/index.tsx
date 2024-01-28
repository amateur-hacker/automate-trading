import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Col, Container, Row } from "reactstrap";
import DefaultForm from "./DefaultForm";
import HorizontalForm from "./HorizontalForm";
import InLineForm from "./InlineForm";
import MegaForms from "./MegaForm";

const FormDefault = () => {
  return (
    <>
      <CommonBreadcrumb parent="Form Layout" pageTitle="Form Default" />
      <Container fluid>
        <Row>
          <Col xl="6">
            <Row>
              <DefaultForm />
              <HorizontalForm />
            </Row>
          </Col>
          <Col xl="6">
            <Row>
              <MegaForms />
              <InLineForm />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormDefault;
