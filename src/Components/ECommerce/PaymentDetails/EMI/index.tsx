import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BankName, EMI, ImagePath, SelectCard, SelectDuration, Submit } from "@/Constant";
import Image from "next/image";
import { Button, Card, CardBody, Col, FormGroup, Input, Row } from "reactstrap";

const EMIs = () => {
  return (
    <Col lg="6" xxl="4" className="box-col-6">
      <Card>
        <CommonCardHeader heading={EMI} />
        <CardBody>
          <Row className="theme-form">
            <Col xs="6">
              <FormGroup className="mb-3 p-r-0">
                <Input type="text" placeholder="First Name" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup className="mb-3">
                <Input type="text" placeholder="Last name" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup className="mb-3 p-r-0">
                <Input type="text" placeholder="Pincode" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup className="mb-3">
                <select className="form-control" size={1}>
                  {BankName.map((name, i) => (
                    <option key={i}>{name}</option>
                  ))}
                </select>
              </FormGroup>
            </Col>
            <Col xs="12">
              <FormGroup className="mb-3">
                <select className="form-control" size={1}>
                  {SelectCard.map((card, i) => (
                    <option key={i}>{card}</option>
                  ))}
                </select>
              </FormGroup>
            </Col>
            <Col xs="12">
              <FormGroup className="mb-3">
                <select className="form-control" size={1}>
                  {SelectDuration.map((duration, i) => (
                    <option key={i}>{duration}</option>
                  ))}
                </select>
              </FormGroup>
            </Col>
            <Col xs="12">
              <FormGroup className="mb-3 ">
                <ul className="simple-list payment-opt d-flex flex-row">
                  <li>
                    <Image src={`${ImagePath}/ecommerce/mastercard.png`} alt="" height={20} width={33} />
                  </li>
                  <li>
                    <Image src={`${ImagePath}/ecommerce/visa.png`} alt="" height={20} width={63} />
                  </li>
                  <li>
                    <Image src={`${ImagePath}/ecommerce/paypal.png`} alt="" height={20} width={75} />
                  </li>
                </ul>
              </FormGroup>
            </Col>
            <Col xs="12">
              <Button color="primary" className=" btn-block">
                {Submit}
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default EMIs;
