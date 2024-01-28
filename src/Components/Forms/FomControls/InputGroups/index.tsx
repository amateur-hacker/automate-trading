import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Col, Container, Row } from "reactstrap";
import BasicInputGroup from "./BasicInputGroup";
import BasicInputGroup2 from "./BasicInputGroup2";

const InputGroups = () => {
  return (
    <>
      <CommonBreadcrumb parent="Form Control" pageTitle="Input Group" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <BasicInputGroup />
            <BasicInputGroup2 />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InputGroups;
