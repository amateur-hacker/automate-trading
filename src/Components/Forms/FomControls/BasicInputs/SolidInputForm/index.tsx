import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Disabled, EmailAddress, ExampleTextarea, Password, SolidInputStyle } from "@/Constant";
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import CommonCardFooter from "../../Common/CommonCardFooter";
import CommonMultipleSelectBox from "../../Common/CommonMultipleSelectBox";
import CommonSelectBox from "../../Common/CommonSelectBox";

const SolidInputForm = () => {
  return (
    <Card>
      <CommonCardHeader heading={SolidInputStyle} />
      <Form className="theme-form">
        <CardBody>
          <Row>
            <Col>
              <FormGroup>
                <Label>{EmailAddress}</Label>
                <Input type="email" placeholder="name@example.com" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label>{Password}</Label>
                <Input type="password" placeholder="Password" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label>{Disabled}</Label>
                <Input type="text" disabled placeholder="Disabled" />
              </FormGroup>
            </Col>
          </Row>
          <CommonSelectBox inputClassName="digits" />
          <CommonMultipleSelectBox inputClassName="digits" />
          <Row>
            <Col>
              <FormGroup className="mb-0">
                <Label>{ExampleTextarea}</Label>
                <Input type="textarea" rows="3" />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
        <CommonCardFooter align={"text-end"} />
      </Form>
    </Card>
  );
};

export default SolidInputForm;
