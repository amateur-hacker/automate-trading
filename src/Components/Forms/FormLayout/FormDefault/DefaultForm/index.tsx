import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import CommonCardFooter from "@/Components/Forms/FomControls/Common/CommonCardFooter";
import { DefaultFormLayout, EmailAddress, Password } from "@/Constant";
import { DefaultFormSubHeading } from "@/Data/Forms/FormLayout";
import { Card, CardBody, Col, Form, FormGroup, FormText, Input, Label } from "reactstrap";

const DefaultForm = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={DefaultFormLayout} subHeading={DefaultFormSubHeading} />
        <CardBody>
          <Form className="theme-form">
            <FormGroup>
              <Label className="col-form-label pt-0">{EmailAddress}</Label>
              <Input type="email" placeholder="Enter email" />
              <FormText className="text-muted">{"We'll never share your email with anyone else."}</FormText>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="exampleInputPassword1">{Password}</Label>
              <Input type="password" placeholder="Password" />
            </FormGroup>
            <div className="checkbox p-0">
              <Input id="default-checkbox" type="checkbox" />
              <Label className="mb-0" for="default-checkbox">
                {"Remember my preference"}
              </Label>
            </div>
          </Form>
        </CardBody>
        <CommonCardFooter color="secondary" />
      </Card>
    </Col>
  );
};

export default DefaultForm;
