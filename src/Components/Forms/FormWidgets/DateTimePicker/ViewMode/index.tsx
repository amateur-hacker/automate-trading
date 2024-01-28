import { useState } from "react";
import DatePicker from "react-datepicker";
import { Col, InputGroup, InputGroupText, Label, Row } from "reactstrap";

const ViewMode = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <Row className="mb-3 g-3">
      <Col sm="3" className="col-form-label text-end">
        <Label>View Mode</Label>
      </Col>
      <Col xl="5" sm="7" lg="8">
        <InputGroup className="date" id="dt-view" data-target-input="nearest">
          <DatePicker className="form-control datetimepicker-input digits" selected={startDate} showTimeSelect onChange={(date) => setStartDate(date)} dateFormat="MMMM d, yyyy h:mm aa" />
          <InputGroupText data-target="#dt-view" data-toggle="datetimepicker">
            <i className="fa fa-calendar"></i>
          </InputGroupText>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default ViewMode;
