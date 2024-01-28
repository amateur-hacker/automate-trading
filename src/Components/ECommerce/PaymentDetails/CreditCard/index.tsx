import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Card, CardBody, Col, Form, FormGroup, Input, Row } from "reactstrap";

const CreditCards = () => {
  return (
    <Col sm="12" xxl="8" className="box-col-12">
      <Card>
        <CommonCardHeader heading="Credit Card" />
        <CardBody>
          <Row>
            <Col md="7">
              <Form className="theme-form mega-form">
                <FormGroup className="mb-3">
                  <Input  type="text" placeholder="Card number" />
                </FormGroup>
                <FormGroup className="mb-3">
                  <Input type="text" placeholder="First Name" />
                </FormGroup>
                <FormGroup className="mb-3">
                  <Input type="date" />
                </FormGroup>
                <FormGroup className="mb-3">
                  <Input type="text" placeholder="Name on card" />
                </FormGroup>
                <FormGroup className="mb-3">
                  <select className="form-select" size={1}>
                    <option>Select Type</option>
                    <option>Master</option>
                    <option>Visa</option>
                  </select>
                </FormGroup>
              </Form>
            </Col>
            <Col md="5" className="text-center order-first">
              <Image className="img-fluid" src={`${ImagePath}/ecommerce/card.png`} alt="" height={235} width={325} />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CreditCards;
