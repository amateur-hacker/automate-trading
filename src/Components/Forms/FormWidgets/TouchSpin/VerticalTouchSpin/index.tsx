import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { VerticalTouchspinSubHeading } from "@/Data/Forms/FormWidgets";
import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonTouchspin from "../Common/CommonTouchspin";

const VerticalTouchSpin = () => {
  const [val, setVal] = useState(80);
  const vertical = true;
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader heading="Vertical Touchspin" subHeading={VerticalTouchspinSubHeading} />
        <CardBody>
          <CommonTouchspin val={val} setVal={setVal} vertical={vertical} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default VerticalTouchSpin;
