import { Card } from "reactstrap";
import { CustomControls, CustomSelect } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Row, Col, CardBody, Form, FormGroup, Label, Input } from "reactstrap";
import { UploadFile } from "@/Constant";
import CommonCardFooter from "../../Common/CommonCardFooter";

const CustomControlsForm = () => {
  return (
    <Card>
      <CommonCardHeader heading={CustomControls} />
      <Form className="theme-form">
        <CardBody>
          <Row>
            <Col>
              <FormGroup className="row">
                <Col sm="3">
                  <Label className="col-form-label">{UploadFile}</Label>
                </Col>
                <Col sm="9">
                  <Input type="file" />
                </Col>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup className="row mb-0">
                <Col sm="3">
                  <Label className=" col-form-label">{CustomSelect}</Label>
                </Col>
                <Col sm="9">
                  <Input type="select" name="select" className="custom-select">
                    <option>{"Open this select menu"}</option>
                    <option defaultValue="1">{"One"}</option>
                    <option defaultValue="2">{"Two"}</option>
                    <option defaultValue="3">{"Three"}</option>
                  </Input>
                </Col>
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
        <CommonCardFooter align={"text-end"} />
      </Form>
    </Card>
  );
};

export default CustomControlsForm;
