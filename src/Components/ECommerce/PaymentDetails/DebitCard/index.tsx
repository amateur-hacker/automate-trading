import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DebitCard, ExpirationDate, SelectMonth, SelectYear, Submit } from "@/Constant";
import { Button, Card, CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";

const DebitCards = () => {
  return (
    <Col lg="6" xxl="4" className="debit-card  box-xs-6">
      <Card>
        <CommonCardHeader heading={DebitCard} />
        <CardBody>
          <Row className="theme-form e-commerce-form">
            <Col xs="6">
              <FormGroup className="mb-3 p-r-0">
                <Input type="text" placeholder="Full name here" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup className="mb-3">
                <Input type="text" placeholder="Card number" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup className="mb-3 p-r-0">
                <Input type="text" placeholder="CVV number" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup className="mb-3">
                <Input type="text" placeholder="CVC" />
              </FormGroup>
            </Col>
            <Col xs="12">
              <Label className="col-form-label p-b-20">{ExpirationDate}</Label>
            </Col>
            <Col className="mb-3 p-r-0" xs="6">
              <FormGroup>
                <select size={1} className="form-control">
                  {SelectMonth.map((months, i) => (
                    <option key={i}>{months}</option>
                  ))}
                </select>
              </FormGroup>
            </Col>
            <Col xs="6" className="mb-3">
              <FormGroup>
                <select className="form-control" size={1}>
                  {SelectYear.map((years, i) => (
                    <option key={i}>{years}</option>
                  ))}
                </select>
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
export default DebitCards;
