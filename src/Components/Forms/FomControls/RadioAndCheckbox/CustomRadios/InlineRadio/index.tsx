import { Option } from "@/Constant";
import { Col, Input, Label } from "reactstrap";

const InlineRadio = () => {
  return (
    <>
      <Col sm="12">
        <h5 className="radio-text">Inline Radio</h5>
      </Col>
      <Col>
        <div className="m-t-15 m-checkbox-inline mb-0 custom-radio-ml">
          <div className="radio radio-primary">
            <Input id="radioinline1" type="radio" name="radio1" value="option1" />
            <Label className="mb-0" htmlFor="radioinline1">
              {Option}
              <span className="digits"> {"1"}</span>
            </Label>
          </div>
          <div className="radio radio-primary">
            <Input id="radioinline2" type="radio" name="radio1" value="option1" />
            <Label className="mb-0" htmlFor="radioinline2">
              {Option}
              <span className="digits"> {"2"}</span>
            </Label>
          </div>
          <div className="radio radio-primary">
            <Input id="radioinline3" type="radio" name="radio1" value="option1" defaultChecked />
            <Label className="mb-0" htmlFor="radioinline3">
              {Option}
              <span className="digits"> {"3"}</span>
            </Label>
          </div>
        </div>
      </Col>
    </>
  );
};

export default InlineRadio;
