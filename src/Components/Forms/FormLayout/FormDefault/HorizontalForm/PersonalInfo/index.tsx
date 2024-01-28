import { CompanyName, ContactNumber, Email, Password, Website } from "@/Constant";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

const PersonalInfo = () => {
  return (
    <>
      <FormGroup className="row">
        <Col sm="3">
          <Label className="col-form-label" htmlFor="inputEmail3">
            {Email}
          </Label>
        </Col>
        <Col sm="9">
          <Input type="email" placeholder="Email" />
        </Col>
      </FormGroup>
      <FormGroup className="row">
        <Col sm="3">
          <Label className=" col-form-label" htmlFor="inputPassword3">
            {Password}
          </Label>
        </Col>
        <Col sm="9">
          <Input type="password" placeholder="Password" />
        </Col>
      </FormGroup>
      <FormGroup className="row">
        <Col sm="3">
          <Label className=" col-form-label" htmlFor="inputPassword3">
            {ContactNumber}
          </Label>
        </Col>
        <Col sm="9">
          <Input type="number" placeholder="Contact" />
        </Col>
      </FormGroup>
      <FormGroup className="row">
        <Col sm="3">
          <Label className=" col-form-label" htmlFor="inputPassword3">
            {CompanyName}
          </Label>
        </Col>
        <Col sm="9">
          <Input type="text" placeholder="Company name" />
        </Col>
      </FormGroup>
      <Row>
        <FormGroup>
          <Col sm="3">
            <Label className="col-form-label">{Website}</Label>
          </Col>
          <Col sm="9">
            <Input type="url" placeholder="Website" />
          </Col>
        </FormGroup>
      </Row>
    </>
  );
};

export default PersonalInfo;
