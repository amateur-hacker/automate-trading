import { DatePickerProps } from "@/Type/Form";
import DatePicker from "react-datepicker";
import { Col, FormGroup } from "reactstrap";

const DateRangePicker = ({ startDate, endDate, setDateRange }: DatePickerProps) => {
  return (
    <Col xl="6">
      <div className="daterange-card">
        <h6 className="sub-title">Date Range Picker</h6>
        <p>The Date Range Picker use the current value of the input to initialize, and update the input if new dates are chosen.</p>
        <div className="theme-form">
          <FormGroup>
            <DatePicker
              className="form-control digits"
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update);
              }}
              isClearable={true}
            />
          </FormGroup>
        </div>
      </div>
    </Col>
  );
};

export default DateRangePicker;
