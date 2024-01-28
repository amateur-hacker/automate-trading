import { Checked, CustomCheckbox, Default, Disabled } from "@/Constant";
import { Col, FormGroup, Input, Label } from "reactstrap";

const CheckboxCustom = () => {
  return (
    <>
      <Col sm="12">
        <h5 className="radio-text">{CustomCheckbox}</h5>
      </Col>
      <Col>
        <FormGroup className="m-t-15">
          <div className="checkbox">
            <Input id="checkbox1" type="checkbox" />
            <Label htmlFor="checkbox1">{Default}</Label>
          </div>
          <div className="checkbox">
            <Input id="checkbox2" type="checkbox" disabled />
            <Label htmlFor="checkbox2">{Disabled}</Label>
          </div>
          <div className="checkbox">
            <Input id="checkbox3" type="checkbox" defaultChecked />
            <Label htmlFor="checkbox3">{Checked}</Label>
          </div>
        </FormGroup>
      </Col>
    </>
  );
};

export default CheckboxCustom;
