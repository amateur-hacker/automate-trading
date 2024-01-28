import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BankName, NetBanking, Submit } from "@/Constant";
import { Fragment } from "react";
import { Button, Card, CardBody, Col, FormGroup, Input, Row } from "reactstrap";

const NetBankings = () => {
  return (
    <Fragment>
      <Col lg="6" xxl="4" className="box-col-6">
        <Card>
          <CommonCardHeader heading={NetBanking} />
          <CardBody>
            <Row className="theme-form">
              <Col xs="12">
                <FormGroup className="mb-3">
                  <Input type="text" placeholder="AC Holder name" />
                </FormGroup>
              </Col>
              <Col xs="12">
                <FormGroup className="mb-3">
                  <Input type="text" placeholder="Account number" />
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup className="mb-3 p-r-0">
                  <select className="form-control" size={1}>
                    {BankName.map((name, i) => (
                      <option key={i}>{name}</option>
                    ))}
                  </select>
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup className="mb-3">
                  <Input type="text" placeholder="ICFC code" />
                </FormGroup>
              </Col>
              <Col xs="12">
                <FormGroup className="mb-3">
                  <Input type="number" placeholder="Enter mobile number" />
                </FormGroup>
              </Col>
              <Col xs="12">
                <FormGroup className="mb-3">
                  <Input type="text" placeholder="Other Details" />
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
    </Fragment>
  );
};
export default NetBankings;
