import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TouchspinStepsSubHeading } from "@/Data/Forms/FormWidgets";
import { ChangeEvent, useState } from "react";
import { Button, Card, CardBody, Col, Input, InputGroup } from "reactstrap";

const TouchspinSteps = () => {
  const [val, setVal] = useState(20);
  const onChangeHandel = (event: ChangeEvent<HTMLInputElement>) => {
    setVal(Number(event.target.value));
  };
  const Minus = () => {
    setVal(val - 10);
  };
  const Addition = () => {
    setVal(val + 10);
  };
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader heading="Touchspin Steps" subHeading={TouchspinStepsSubHeading} />
        <CardBody>
          <InputGroup className="bootstrap-touchspin">
            <Button color="primary" className="bootstrap-touchspin-down" onClick={Minus}>
              <i className="fa fa-minus"></i>
            </Button>
            <Input className="touchspin" type="text" value={val} onChange={(e) => onChangeHandel(e)} />
            <Button color="primary btn-square" className="bootstrap-touchspin-up" onClick={Addition}>
              <i className="fa fa-plus"></i>
            </Button>
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default TouchspinSteps;
