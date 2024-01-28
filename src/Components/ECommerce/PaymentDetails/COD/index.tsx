import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { COD, Submit } from "@/Constant";
import { Button, Card, CardBody, Col, FormGroup, Input, Row } from "reactstrap";

const CashOnDelivery = () => {
  return (
    <Col lg="6" xxl="4" className="box-col-6">
      <Card>
        <CommonCardHeader heading={COD} />
        <CardBody>
          <Row className="theme-form">
            <Col xs="6">
              <FormGroup className="mb-3 p-r-0">
                <Input type="text" placeholder="First Name" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Input type="text" placeholder="Last name" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup className="mb-3 p-r-0">
                <Input type="text" placeholder="Pincode" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Input type="number" placeholder="Enter mobile number" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup className="mb-3 p-r-0">
                <Input type="text" placeholder="State" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Input type="text" placeholder="City" />
              </FormGroup>
            </Col>
            <Col xs="12">
              <FormGroup className="mb-3 ">
                <textarea className="form-control" rows={3} placeholder="Address"></textarea>
              </FormGroup>
            </Col>
            <Col xs="12">
              <Button color="primary" className="btn-block">
                {Submit}
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CashOnDelivery;
