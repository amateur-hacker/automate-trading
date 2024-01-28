import { Checkboxes, Option } from "@/Constant";
import React from "react";
import { Col, Input, Label } from "reactstrap";

const CheckboxOptions = () => {
  return (
    <>
      <div className="row mb-0 horizontal-layout">
        <Col sm="3">
          <Label className="col-form-Label pb-0 mb-0">{Checkboxes}</Label>
        </Col>
        <Col sm="9">
          <div className="mb-0">
            <div className="form-check form-check-inline checkbox checkbox-primary">
              <Input id="inline-form-1" type="checkbox" />
              <Label className="mb-0" htmlFor="inline-form-1">
                {Option} {"1"}
              </Label>
            </div>
            <div className="form-check form-check-inline checkbox checkbox-primary">
              <Input id="inline-form-2" type="checkbox" />
              <Label className="mb-0" htmlFor="inline-form-2">
                {Option} {"2"}
              </Label>
            </div>
          </div>
        </Col>
      </div>
    </>
  );
};

export default CheckboxOptions;
