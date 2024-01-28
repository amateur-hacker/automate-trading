import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AnimatedCheckboxButtons, Option } from "@/Constant";
import { Card, CardBody, Col, Input, Label, Row } from "reactstrap";

const AnimatedCheckbox = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader heading={AnimatedCheckboxButtons} />
        <CardBody className="animate-chk">
          <Row>
            <Col>
              <Label className="d-block" htmlFor="chk-ani">
                <Input className="checkbox_animated" id="chk-ani" type="checkbox" defaultChecked />
                {Option} {"1"}
              </Label>
              <Label className="d-block" htmlFor="chk-ani1">
                <Input className="checkbox_animated" id="chk-ani1" type="checkbox" />
                {Option} {"2"}
              </Label>
              <Label className="d-block" htmlFor="chk-ani2">
                <Input className="checkbox_animated" id="chk-ani2" type="checkbox" defaultChecked />
                {Option} {"3"}
              </Label>
              <Label className="d-block" htmlFor="chk-ani3">
                <Input className="checkbox_animated" id="chk-ani3" type="checkbox" />
                {Option} {"4"}
              </Label>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedCheckbox;
