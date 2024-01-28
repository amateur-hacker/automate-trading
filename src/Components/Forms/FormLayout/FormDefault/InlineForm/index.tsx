import { InlineFormWithLabel, InlineFormWithoutLabel, Login, Password, Username } from "@/Constant";
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label } from "reactstrap";

const InLineForm = () => {
  return (
    <Col sm="12">
      <Card>
        <CardBody className="radio-text">
          <h6>{InlineFormWithLabel}</h6>
          <Form className="row form-inline theme-form mt-3">
            <Col xxl="4">
              <FormGroup className="mb-3 d-flex">
                <Label className="col-form-label pe-2">{Username}</Label>
                <Input type="text" name="inputUsername" placeholder="Username" autoComplete="off" />
              </FormGroup>
            </Col>
            <Col xxl="4">
              <FormGroup className=" mb-3 d-flex">
                <Label className="col-form-label pe-2">{Password}</Label>
                <Input type="password" name="inputPassword" placeholder="Password" autoComplete="off" />
              </FormGroup>
            </Col>
            <Col xxl="4">
              <FormGroup className=" mb-3 d-flex">
                <Button color="primary" type="reset">
                  {Login}
                </Button>
              </FormGroup>
            </Col>
          </Form>
          <h6>{InlineFormWithoutLabel}</h6>
          <Form className="row row-cols-sm-3 theme-form mt-3 form-bottom">
            <FormGroup className="mb-3 d-flex">
              <Input type="text" name="inputUnlabelUsername" placeholder="Username" autoComplete="off" />
            </FormGroup>
            <FormGroup className="mb-3 d-flex">
              <Input type="password" name="inputPassword" placeholder="Password" autoComplete="off" />
            </FormGroup>
            <FormGroup className="mb-3">
              <Button color="secondary" type="reset">
                {Login}
              </Button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};
export default InLineForm;
