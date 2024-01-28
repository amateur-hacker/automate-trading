import { TodayButton } from "@/Constant";
import { DatePickerInterFace } from "@/Type/Form";
import DatePicker from "react-datepicker";
import { Col, Label, Row } from "reactstrap";

const TodayButtons = ({ startDate, handleChange }: DatePickerInterFace) => {
  return (
    <Row className="mb-3 g-3">
      <Col sm="3" className=" col-form-label text-end">
        <Label>{TodayButton}</Label>
      </Col>
      <Col xl="5" sm="9">
        <DatePicker className="form-control digits" todayButton="Vandaag" selected={startDate} onChange={handleChange} />
      </Col>
    </Row>
  );
};

export default TodayButtons;
