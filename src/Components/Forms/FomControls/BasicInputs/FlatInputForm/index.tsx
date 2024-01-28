import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { EmailAddress, ExampleTextarea, FlatStyle, Password } from "@/Constant";
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import CommonCardFooter from "../../Common/CommonCardFooter";
import CommonMultipleSelectBox from "../../Common/CommonMultipleSelectBox";
import CommonSelectBox from "../../Common/CommonSelectBox";
const FlatInputForm = () => {
  return (
    <Card>
      <CommonCardHeader heading={FlatStyle} />
      <Form className="theme-form">
        <CardBody>
          <Row>
            <Col>
              <FormGroup>
                <Label>{EmailAddress}</Label>
                <Input className="btn-square" type="email" placeholder="name@example.com" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label>{Password}</Label>
                <Input className="btn-square" type="password" placeholder="Password" />
              </FormGroup>
            </Col>
          </Row>
          <CommonSelectBox inputClassName="btn-square digits" />
          <CommonMultipleSelectBox inputClassName="btn-square digits" />
          <Row>
            <Col>
              <FormGroup className="mb-0">
                <Label>{ExampleTextarea}</Label>
                <Input type="textarea" className="btn-square" rows="3" />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
        <CommonCardFooter align={"text-end"} />
      </Form>
    </Card>
  );
};

export default FlatInputForm;
