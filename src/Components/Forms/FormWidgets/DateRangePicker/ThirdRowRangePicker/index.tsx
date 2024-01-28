import { DateAndTime } from "@/Constant";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Col, FormGroup } from "reactstrap";

const ThirdRowRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Col lg="12">
      <div className="daterange-card">
        <h6 className="sub-title">{DateAndTime}</h6>
        <p> The Date Range Picker can also be used to select times. Hour, minute and (optional) second dropdowns are added below the calendars. An option exists to set the increment count of the minutes dropdown to e.g. offer only 15-minute or 30-minute increments.</p>
        <div className="theme-form">
          <FormGroup>
            <DatePicker className="form-control digits" selected={startDate} onChange={(date: Date) => setStartDate(date)} monthsShown={2} showYearDropdown showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" />
          </FormGroup>
        </div>
      </div>
    </Col>
  );
};
export default ThirdRowRangePicker;
