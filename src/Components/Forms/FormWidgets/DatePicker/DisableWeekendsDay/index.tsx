import { Row, Label, Col } from "reactstrap";
import DatePicker from "react-datepicker";
import { DisableDaysOfWeek } from "@/Constant";
import { DatePickerInterFace } from "@/Type/Form";

const DisableWeekendsDay = ({ handleChange }: DatePickerInterFace) => {
  return (
    <Row className="mb-3 g-3">
      <Col sm="3" className=" col-form-label text-end">
        <Label>{DisableDaysOfWeek}</Label>
      </Col>
      <Col xl="5" sm="9">
        <DatePicker className="form-control digits" placeholderText="Click to select a date" onChange={handleChange} />
      </Col>
    </Row>
  );
};

export default DisableWeekendsDay;
