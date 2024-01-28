import { DatePickerProps } from "@/Type/Form";
import DatePicker from "react-datepicker";
import { Col, FormGroup } from "reactstrap";

const InputEmpty = ({ startDate, endDate, setDateRange }: DatePickerProps) => {
  return (
    <Col xl="6">
      <div className="daterange-card">
        <h6 className="sub-title">Input Initially Empty</h6>
        <p>
          If you're using a date range as a filter, you may want to attach a picker to an input but leave it empty by default. This example shows how to accomplish that using the <code>autoUpdateInput</code> setting, and the <code>apply</code> and <code>cancel</code> events.
        </p>
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
              monthsShown={2}
            />
          </FormGroup>
        </div>
      </div>
    </Col>
  );
};

export default InputEmpty;
