import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicFormControl, EmailAddress, ExampleTextarea, Password } from "@/Constant";
import { useForm } from "react-hook-form";
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import CommonCardFooter from "../../Common/CommonCardFooter";
import CommonMultipleSelectBox from "../../Common/CommonMultipleSelectBox";
import CommonSelectBox from "../../Common/CommonSelectBox";

const BasicFormControls = () => {
  const { handleSubmit } = useForm();
  const onSubmit = () => {};
  return (
    <Card>
      <CommonCardHeader heading={BasicFormControl} />
      <Form className="theme-form" onSubmit={handleSubmit(onSubmit)}>
        <CardBody>
          <Row>
            <Col>
              <FormGroup>
                <Label className="mb-2">{EmailAddress}</Label>
                <Input type="email" placeholder="name@example.com" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label className="mb-2">{Password}</Label>
                <Input type="password" placeholder="Password" />
              </FormGroup>
            </Col>
          </Row>
          <CommonSelectBox inputClassName="digits" defaultValue="1" />
          <CommonMultipleSelectBox inputClassName="digits" defaultValue="1" />
          <Row>
            <Col>
              <Label>{ExampleTextarea}</Label>
              <Input type="textarea" rows="3" />
            </Col>
          </Row>
        </CardBody>
        <CommonCardFooter align={"text-end"} />
      </Form>
    </Card>
  );
};

export default BasicFormControls;
