import { Col, Label, Row } from "reactstrap";
import DatePicker from "react-datepicker";
import { DisableDatepicker } from "@/Constant";
import { DatePickerInterFace } from "@/Type/Form";

const DisableDatePicker = ({ startDate, handleChange }: DatePickerInterFace) => {
  return (
    <Row className="mb-3 g-3">
      <Col sm="3" className=" col-form-label text-end">
        <Label>{DisableDatepicker}</Label>
      </Col>
      <Col sm="3">
        <div className="datepicker-here">
          <DatePicker className="form-control digits" selected={startDate} onChange={handleChange} disabled placeholderText="This is disabled" />
        </div>
      </Col>
    </Row>
  );
};

export default DisableDatePicker;
