import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DefaultInput, InputSizing, LargeInput, SmallInput } from "@/Constant";
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import CommonCardFooter from "../../Common/CommonCardFooter";
import CommonSelectBox from "../../Common/CommonSelectBox";

const InputSizeForm = () => {
  return (
    <Card>
      <CommonCardHeader heading={InputSizing} />
      <Form className="theme-form">
        <CardBody>
          <Row>
            <Col>
              <FormGroup>
                <Label className="col-form-label-sm">{LargeInput}</Label>
                <Input className="form-control-lg" type="text" placeholder="col-form-label-lg" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label>{DefaultInput}</Label>
                <Input type="text" placeholder="form-control" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label className="col-form-label-sm">{SmallInput}</Label>
                <Input className="form-control-sm" type="text" placeholder="col-form-label-sm" />
              </FormGroup>
            </Col>
          </Row>
          <CommonSelectBox inputClassName="digits form-control-lg" />
          <CommonSelectBox inputClassName="digits" />
          <CommonSelectBox inputClassName="form-control-sm digits" />
        </CardBody>
        <CommonCardFooter align={"text-end"} />
      </Form>
    </Card>
  );
};

export default InputSizeForm;
