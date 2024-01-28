import { SingleDatePicker } from "@/Type/Form";
import DatePicker from "react-datepicker";
import { Col, FormGroup } from "reactstrap";


const SingleDatePicker = ({ startDate1, handleChange }:SingleDatePicker ) => {
  return (
    <Col xl="6">
      <div className="daterange-card">
        <h6 className="sub-title">Single Date Picker</h6>
        <p>The Date Range Picker can be turned into a single date picker widget with only one calendar. In this example, dropdowns to select a month and year have also been enabled at the top of the calendar to quickly jump to different months.</p>
        <div className="theme-form">
          <FormGroup>
            <DatePicker className="form-control digits" selected={startDate1} onChange={handleChange} peekNextMonth showMonthDropdown showYearDropdown dropdownMode="select" />
          </FormGroup>
        </div>
      </div>
    </Col>
  );
};

export default SingleDatePicker;
