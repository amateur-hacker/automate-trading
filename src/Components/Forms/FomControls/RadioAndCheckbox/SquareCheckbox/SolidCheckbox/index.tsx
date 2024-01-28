import { Checked, Default, Disabled, SolidCheckbox } from "@/Constant";
import React from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";

const SolidCheckboxes = () => {
  return (
    <>
      <Col sm="12 ps-0">
        <h5 className="radio-text">{SolidCheckbox}</h5>
      </Col>
      <Col>
        <FormGroup className="m-t-15 mb-0">
          <div className="checkbox checkbox-solid-success">
            <Input id="solid1" type="checkbox" />
            <Label htmlFor="solid1">{Default}</Label>
          </div>
          <div className="checkbox checkbox-solid-dark">
            <Input id="solid2" type="checkbox" disabled />
            <Label htmlFor="solid2">{Disabled}</Label>
          </div>
          <div className="checkbox checkbox-solid-primary">
            <Input id="solid3" type="checkbox" defaultChecked />
            <Label htmlFor="solid3">{Checked}</Label>
          </div>
          <div className="checkbox checkbox-solid-danger">
            <Input id="solid4" type="checkbox" defaultChecked />
            <Label htmlFor="solid4">{Checked}</Label>
          </div>
          <div className="checkbox checkbox-solid-light">
            <Input id="solid5" type="checkbox" defaultChecked />
            <Label htmlFor="solid5">{Checked}</Label>
          </div>
          <div className="checkbox checkbox-solid-info">
            <Input id="solid6" type="checkbox" defaultChecked />
            <Label htmlFor="solid6">{Checked}</Label>
          </div>
          <div className="checkbox checkbox-solid-dark">
            <Input id="solid7" type="checkbox" defaultChecked />
            <Label className="mb-0" htmlFor="solid7">
              {Checked}
            </Label>
          </div>
        </FormGroup>
      </Col>
    </>
  );
};

export default SolidCheckboxes;
