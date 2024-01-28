import { SelectDateWithTime } from "@/Constant";
import { DatePickerInterFace } from "@/Type/Form";
import DatePicker from "react-datepicker";
import { Col, Label, Row } from "reactstrap";

const DateWithTime = ({ startDate, handleChange }: DatePickerInterFace) => {
  return (
    <Row className="mb-3 g-3">
      <Col sm="3" className="col-form-label text-end">
        <Label>{SelectDateWithTime}</Label>
      </Col>
      <Col xl="5" sm="9">
        <DatePicker className="form-control digits" showPopperArrow={false} selected={startDate} showTimeSelect dateFormat="Pp" onChange={handleChange} />
      </Col>
    </Row>
  );
};

export default DateWithTime;
