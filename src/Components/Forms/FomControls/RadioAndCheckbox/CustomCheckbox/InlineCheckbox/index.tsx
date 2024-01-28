import { InlineCheckbox, Option } from "@/Constant";
import { Col, Input, Label } from "reactstrap";

const InlineCheckboxes = () => {
  return (
    <>
      <Col sm="12">
        <h5 className="radio-text">{InlineCheckbox}</h5>
      </Col>
      <Col>
        <div className="m-t-15 m-checkbox-inline mb-0 custom-radio-ml">
          <div className="checkbox checkbox-dark">
            <Input id="inline-1" type="checkbox" defaultChecked />
            <Label htmlFor="inline-1" className="mb-0">
              {Option}
              <span className="digits"> {"1"}</span>
            </Label>
          </div>
          <div className="checkbox checkbox-dark">
            <Input id="inline-2" type="checkbox" defaultChecked />
            <Label htmlFor="inline-2" className="mb-0">
              {Option}
              <span className="digits"> {"2"}</span>
            </Label>
          </div>
          <div className="checkbox checkbox-dark">
            <Input id="inline-3" type="checkbox" defaultChecked />
            <Label htmlFor="inline-3" className="mb-0">
              {Option}
              <span className="digits"> {"3"}</span>
            </Label>
          </div>
        </div>
      </Col>
    </>
  );
};

export default InlineCheckboxes;
