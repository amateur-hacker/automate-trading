import { Col, Input, Row } from "reactstrap";

const BillingInformation = () => {
  return (
    <>
      <hr className="mt-4 mb-4" />
      <h6 className="pb-4 mb-0 radio-text">Billing Information</h6>
      <Row className="theme-form billing-form form-space">
        <Col className="col-auto">
          <Input type="text" placeholder="Name On Card" />
        </Col>
        <Col className="col-auto">
          <Input type="text" name="inputPassword" placeholder="Card Number" />
        </Col>
        <Col className="col-auto">
          <Input type="text" name="inputPassword" placeholder="Zip Code" />
        </Col>
      </Row>
    </>
  );
};

export default BillingInformation;
