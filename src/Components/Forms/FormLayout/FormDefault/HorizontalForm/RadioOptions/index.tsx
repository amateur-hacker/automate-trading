import { Radios } from "@/Constant";
import { HorizontalFormRadioButtonData } from "@/Data/Forms/FormLayout";
import React from "react";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

const RadioOptions = () => {
  return (
    <>
      <FormGroup className="mb-3">
        <Row>
          <Label className="col-form-label col-sm-3 pt-0">{Radios}</Label>
          <Col sm="9">
            {HorizontalFormRadioButtonData.map((item, i) => (
              <div key={i} className="form-check radio radio-primary">
                <Input type="radio" name="radio1" id={item} value="option1" disabled={item == "Disabled" && true} />
                <Label htmlFor={item}>{item}</Label>
              </div>
            ))}
          </Col>
        </Row>
      </FormGroup>
    </>
  );
};

export default RadioOptions;
