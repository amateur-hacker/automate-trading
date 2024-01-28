import { BrandState, CheckboxStates, PrimaryState, SuccessState } from "@/Constant";
import { Col, FormGroup, Input, Label } from "reactstrap";

const CheckboxState = () => {
  return (
    <>
      <Col sm="12">
        <h5 className="radio-text">{CheckboxStates}</h5>
      </Col>
      <Col>
        <FormGroup className="m-t-15 custom-radio-ml">
          <div className="checkbox checkbox-primary">
            <Input id="checkbox-primary-1" type="checkbox" defaultChecked />
            <Label htmlFor="checkbox-primary-1">{SuccessState}</Label>
          </div>
          <div className="checkbox checkbox-secondary">
            <Input id="checkbox-dark" type="checkbox" disabled />
            <Label htmlFor="checkbox-dark">{BrandState}</Label>
          </div>
          <div className="checkbox checkbox-success">
            <Input id="checkbox-primary" type="checkbox" defaultChecked />
            <Label htmlFor="checkbox-primary">{PrimaryState}</Label>
          </div>
        </FormGroup>
      </Col>
    </>
  );
};

export default CheckboxState;
