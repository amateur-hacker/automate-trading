import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { WithIconTouchspinSubHeading } from "@/Data/Forms/FormWidgets";
import { ChangeEvent, useState } from "react";
import { Check } from "react-feather";
import { Button, Card, CardBody, Col, Input, InputGroup, InputGroupText } from "reactstrap";

const WithIconTouchspin = () => {
  const [val, setVal] = useState(59);
  const onChangeHandel = (event: ChangeEvent<HTMLInputElement>) => {
    setVal(Number(event.target.value));
  };
  const Minus = () => {
    setVal(val - 1);
  };
  const Addition = () => {
    setVal(val + 1);
  };
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader heading="Touchspin With Icon" subHeading={WithIconTouchspinSubHeading} />
        <CardBody>
          <InputGroup className="bootstrap-touchspin">
            <Button color="primary" className="bootstrap-touchspin-down" onClick={Minus}>
              <i className="fa fa-minus"></i>
            </Button>
            <Input className="touchspin" type="text" value={val} onChange={(e) => onChangeHandel(e)} />
            <InputGroupText>
              <Check />
            </InputGroupText>
            <Button color="primary btn-square" className="bootstrap-touchspin-up" onClick={Addition}>
              <i className="fa fa-plus"></i>
            </Button>
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default WithIconTouchspin;
