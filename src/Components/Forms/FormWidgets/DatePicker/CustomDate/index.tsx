import { Col, Label, Row } from "reactstrap";
import DatePicker from "react-datepicker";
import { CustomDateFormat } from "@/Constant";
import { DatePickerInterFace } from "@/Type/Form";

const CustomDate = ({ startDate, handleChange }: DatePickerInterFace) => {
  return (
    <Row className="mb-3 g-3">
      <Col sm="3" className="col-form-label text-end">
        <Label>{CustomDateFormat}</Label>
      </Col>
      <Col xl="9" sm="9">
        <DatePicker className="form-control digits" dateFormat="yyyy/MM/dd" selected={startDate} onChange={handleChange} />
      </Col>
    </Row>
  );
};

export default CustomDate;
