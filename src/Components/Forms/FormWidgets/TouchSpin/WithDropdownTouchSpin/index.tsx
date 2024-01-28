import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href } from "@/Constant";
import { WithDropdownTouchspinSubHeading } from "@/Data/Forms/FormWidgets";
import { ChangeEvent, useState } from "react";
import { Button, ButtonGroup, Card, CardBody, Col, Input, InputGroup, InputGroupText } from "reactstrap";

const WithDropdownTouchspin = () => {
  const [val, setVal] = useState(69);
  const Minus = () => {
    setVal(val - 0.25);
  };
  const Addition = () => {
    setVal(val + 0.25);
  };
  const onChangeHandel = (event: ChangeEvent<HTMLInputElement>) => {
    setVal(Number(event.target.value));
  };
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader heading="Touchspin With Dropdown" subHeading={WithDropdownTouchspinSubHeading} />
        <CardBody>
          <InputGroup className=" bootstrap-touchspin">
            <Button color="primary" className="bootstrap-touchspin-down" onClick={Minus}>
              <i className="fa fa-minus"></i>
            </Button>
            <InputGroupText>{"Pre"}</InputGroupText>
            <Input className="touchspin" type="text" value={val} onChange={(e) => onChangeHandel(e)} />
            <InputGroupText>{"Post"}</InputGroupText>
            <Button color="primary btn-square" className="bootstrap-touchspin-up" onClick={Addition}>
              <i className="fa fa-plus"></i>
            </Button>
            <div className="dropdown-basic">
              <div className="dropdown">
                <ButtonGroup className="mb-0 me-0">
                  <Button color="light" className="dropbtn  txt-dark" type="button">
                    Action
                    <span>
                      <i className="icofont icofont-arrow-down"></i>
                    </span>
                  </Button>
                  <div className="dropdown-content">
                    <a href={Href}>Action</a>
                    <a href={Href}>Another Action</a>
                    <a href={Href}>Something Else Here</a>
                    <div className="dropdown-divider"></div>
                    <a href={Href}>Separated Link </a>
                  </div>
                </ButtonGroup>
              </div>
            </div>
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default WithDropdownTouchspin;
