import { FormWidgetsDatePickerProps } from "@/Type/Form";
import DatePicker from "react-datepicker";
import { Col, Label, Row } from "reactstrap";

const NoIcon = ({ startDate, handleChange }: FormWidgetsDatePickerProps) => {
  return (
    <Row className="mb-3 g-3">
      <Col sm="3" className=" col-form-label text-end">
        <Label>No Icon (input field only)</Label>
      </Col>
      <Col xl="5" sm="7" lg="8">
        <DatePicker className="form-control datetimepicker-input digits" selected={startDate} showTimeSelect onChange={handleChange} dateFormat="MMMM d, yyyy h:mm aa" />
      </Col>
    </Row>
  );
};

export default NoIcon;
