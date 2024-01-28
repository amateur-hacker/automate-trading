import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { EdgesInputStyle, EmailAddress, ExampleTextarea, Password } from "@/Constant";
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import CommonCardFooter from "../../Common/CommonCardFooter";
import CommonMultipleSelectBox from "../../Common/CommonMultipleSelectBox";
import CommonSelectBox from "../../Common/CommonSelectBox";

const EdgesInputForm = () => {
  return (
    <Card>
      <CommonCardHeader heading={EdgesInputStyle} />
      <Form className="theme-form">
        <CardBody>
          <Row>
            <Col>
              <FormGroup>
                <Label>{EmailAddress}</Label>
                <Input className="btn-pill" type="email" placeholder="name@example.com" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label>{Password}</Label>
                <Input className="btn-pill" type="password" placeholder="Password" />
              </FormGroup>
            </Col>
          </Row>
          <CommonSelectBox inputId="exampleFormControlSelect7" inputClassName="btn-pill digits" />
          <CommonMultipleSelectBox inputClassName="btn-pill digits" />
          <Row>
            <Col>
              <FormGroup className="mb-0">
                <Label htmlFor="exampleFormControlTextarea9">{ExampleTextarea}</Label>
                <Input type="textarea" className="btn-pill" rows="3" />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
        <CommonCardFooter align={"text-end"} />
      </Form>
    </Card>
  );
};

export default EdgesInputForm;
