import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CustomCheckbox } from "@/Constant";
import { Card, CardBody, Col, Row } from "reactstrap";
import CheckboxCustom from "./CheckboxCustom";
import CheckboxState from "./CheckboxStates";
import InlineCheckboxes from "./InlineCheckbox";

const CustomCheckBoxes = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader heading={CustomCheckbox} />
        <CardBody>
          <Row>
            <CheckboxCustom />
            <CheckboxState />
            <InlineCheckboxes />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomCheckBoxes;
