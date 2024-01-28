import { EnterOTP, Href, Resend, Send } from "@/Constant";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";

const MobileAndOtp = () => {
  return (
    <>
      <FormGroup>
        <Label>Enter Your Mobile Number</Label>
        <Row>
          <Col xs="4" sm="3">
            <Input type="text" value="+ 91" />
          </Col>
          <Col xs="8" sm="9">
            <Input type="tel" value="000-000-0000" />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup tag={"div"}>
        <Button color="primary" className=" btn-block" type="submit">
          {Send}
        </Button>
      </FormGroup>
      <FormGroup>
        <span className="reset-password-link">
          If don't receive OTP?
          <a className="btn-link text-danger" href={Href}>
            {Resend}
          </a>
        </span>
      </FormGroup>
      <FormGroup>
        <Label>{EnterOTP}</Label>
        <Row>
          <Col>
            <Input className=" text-center opt-text" type="text" value="00" maxlength="2" />
          </Col>
          <Col>
            <Input className=" text-center opt-text" type="text" value="00" maxlength="2" />
          </Col>
          <Col>
            <Input className=" text-center opt-text" type="text" value="00" maxlength="2" />
          </Col>
        </Row>
      </FormGroup>
    </>
  );
};

export default MobileAndOtp;
