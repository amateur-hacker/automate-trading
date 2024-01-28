import { Checked, CustomRadio, Disabled, Option } from "@/Constant";
import { Col,FormGroup, Input, Label } from "reactstrap";

const RadioCustom = () => {
  return (
    <>
      <Col sm="12">
        <h5 className="radio-text">{CustomRadio}</h5>
      </Col>
      <Col>
        <FormGroup className="m-t-15 custom-radio-ml">
          <div className="radio radio-primary">
            <Input id="radio1" type="radio" name="radio1" value="option1" defaultChecked />
            <Label htmlFor="radio1">
              {Option}
              <span className="digits"> {"1"}</span>
            </Label>
          </div>
          <div className="radio radio-primary">
            <Input id="radio3" type="radio" name="radio1" value="option1" disabled />
            <Label htmlFor="radio3">{Disabled}</Label>
          </div>
          <div className="radio radio-primary">
            <Input id="radio4" type="radio" name="radio1" value="option1" />
            <Label htmlFor="radio4">{Checked}</Label>
          </div>
        </FormGroup>
      </Col>
    </>
  );
};

export default RadioCustom;
