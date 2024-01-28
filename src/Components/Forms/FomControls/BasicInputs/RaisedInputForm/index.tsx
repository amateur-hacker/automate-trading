import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { EmailAddress, ExampleTextarea, Password, RaiseInputStyle } from "@/Constant";
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import CommonCardFooter from "../../Common/CommonCardFooter";
import CommonMultipleSelectBox from "../../Common/CommonMultipleSelectBox";
import CommonSelectBox from "../../Common/CommonSelectBox";

const RaiseInputForm = () => {
  return (
    <Card>
      <CommonCardHeader heading={RaiseInputStyle} />
      <Form className="theme-form">
        <CardBody>
          <Row>
            <Col>
              <FormGroup>
                <Label>{EmailAddress}</Label>
                <Input className="input-air-primary" type="email" placeholder="name@example.com" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label>{Password}</Label>
                <Input className="input-air-primary" type="password" placeholder="Password" />
              </FormGroup>
            </Col>
          </Row>
          <CommonSelectBox inputClassName="input-air-primary digits" />
          <CommonMultipleSelectBox inputClassName="input-air-primary digits" />
          <Row>
            <Col>
              <FormGroup className="mb-0">
                <Label>{ExampleTextarea}</Label>
                <Input type="textarea" className="input-air-primary" rows="3" />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
        <CommonCardFooter align={"text-end"} />
      </Form>
    </Card>
  );
};

export default RaiseInputForm;
