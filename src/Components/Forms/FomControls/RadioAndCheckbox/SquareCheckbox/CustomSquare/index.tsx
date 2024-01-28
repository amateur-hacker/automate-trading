import { Checked, Default, Disabled } from "@/Constant";
import React from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";

const CustomSquare = () => {
  return (
    <Col>
      <FormGroup>
        <div className="checkbox checkbox-dark m-squar">
          <Input id="inline-sqr-1" type="checkbox" />
          <Label className="mt-0" htmlFor="inline-sqr-1">
            {Default}
          </Label>
        </div>
        <div className="checkbox checkbox-dark m-squar">
          <Input id="inline-sqr-2" type="checkbox" disabled />
          <Label htmlFor="inline-sqr-2">{Disabled}</Label>
        </div>
        <div className="checkbox checkbox-dark m-squar">
          <Input id="inline-sqr-3" type="checkbox" defaultChecked />
          <Label htmlFor="inline-sqr-3">{Checked}</Label>
        </div>
      </FormGroup>
    </Col>
  );
};

export default CustomSquare;
