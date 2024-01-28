import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CustomRadio } from "@/Constant";
import { Card, CardBody, Col, Row } from "reactstrap";
import InlineRadio from "./InlineRadio";
import RadioCustom from "./RadioCustom";
import RadioState from "./RadioStates";

const CustomRadios = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader heading={CustomRadio} />
        <CardBody>
          <Row>
            <RadioCustom />
            <RadioState />
            <InlineRadio />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomRadios;
