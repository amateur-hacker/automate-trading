import { PredefinedRangesProps } from "@/Type/Form";
import { Col,FormGroup, Input } from "reactstrap";

const PredefinedRanges = ({ handleChange, startDate1 }: PredefinedRangesProps) => {
  return (
    <Col xl="6">
      <div className="daterange-card">
        <h6 className="sub-title">PreDefined Ranges</h6>
        <p>This example shows the option to predefine date ranges that the user can choose from a list.</p>
        <div className="theme-form">
          <FormGroup>
            <Input type="select" className=" digits" value={startDate1} onChange={(e) => handleChange(e.target.value)} placeholder="Select">
              <option>Select</option>
              <option value="Today">Today</option>
              <option value="Yesterday">Yesterday</option>
              <option value="Last 7 Days">Last 7 Days</option>
              <option value="Last 30 Days">Last 30 Days</option>
            </Input>
          </FormGroup>
        </div>
      </div>
    </Col>
  );
};
export default PredefinedRanges;
