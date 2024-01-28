import { Col, InputGroup, Label, Row } from "reactstrap";
import DatePicker from "react-datepicker";
import { Default } from "@/Constant";
import { DatePickerInterFace } from "@/Type/Form";

const DefaultDate = ({ startDate, handleChange }: DatePickerInterFace) => {
  return (
    <Row className="mb-3 g-3">
      <Col sm="3" className="col-form-label text-end">
        <Label>{Default}</Label>
      </Col>
      <Col xl="5" sm="9">
        <InputGroup>
          <DatePicker className="form-control digits" selected={startDate} onChange={handleChange} />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default DefaultDate;
