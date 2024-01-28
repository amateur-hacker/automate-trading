import React from "react";
import { Col, FormGroup, Label, Input } from "reactstrap";
import { Option, RadioStates } from "@/Constant";

const RadioState = () => {
  return (
    <>
      <Col sm="12">
        <h5 className="radio-text">{RadioStates}</h5>
      </Col>
      <Col>
        <FormGroup className="m-t-15 custom-radio-ml">
          <div className="radio radio-primary">
            <Input id="radio11" type="radio" name="radio1" value="option1" />
            <Label htmlFor="radio11">
              {Option}
              <span className="digits"> {"1"}</span>
            </Label>
          </div>
          <div className="radio radio-secondary">
            <Input id="radio22" type="radio" name="radio1" value="option1" />
            <Label htmlFor="radio22">
              {Option}
              <span className="digits"> {"2"}</span>
            </Label>
          </div>
          <div className="radio radio-success">
            <Input id="radio55" type="radio" name="radio1" value="option1" />
            <Label htmlFor="radio55">
              {Option}
              <span className="digits"> {"3"}</span>
            </Label>
          </div>
          <div className="radio radio-info">
            <Input id="radio33" type="radio" name="radio1" value="option1" disabled />
            <Label htmlFor="radio33">
              {Option}
              <span className="digits"> {"4"}</span>
            </Label>
          </div>
          <div className="radio radio-warning">
            <Input id="radio44" type="radio" name="radio1" value="option1" />
            <Label htmlFor="radio44">
              {Option}
              <span className="digits"> {"5"}</span>
            </Label>
          </div>
          <div className="radio radio-danger">
            <Input id="radio66" type="radio" name="radio1" value="option1" defaultChecked />
            <Label htmlFor="radio66">
              {Option}
              <span className="digits"> {"6"}</span>
            </Label>
          </div>
        </FormGroup>
      </Col>
    </>
  );
};

export default RadioState;
