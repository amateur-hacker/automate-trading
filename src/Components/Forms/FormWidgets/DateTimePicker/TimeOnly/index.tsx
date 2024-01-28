import { FormWidgetsDatePickerProps } from "@/Type/Form";
import React from "react";
import DatePicker from "react-datepicker";
import { Col, InputGroup, InputGroupText, Label, Row } from "reactstrap";

const TimeOnly = ({ handleChange, startDate }: FormWidgetsDatePickerProps) => {
  return (
    <Row className="mb-3 g-3">
      <Col sm="3" className="col-form-label text-end">
        <Label>Time Only</Label>
      </Col>
      <Col xl="5" sm="7" lg="8">
        <InputGroup className="date" id="dt-minimum" data-target-input="nearest">
          <DatePicker className="form-control datetimepicker-input digits" selected={startDate} onChange={handleChange} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />
          <InputGroupText data-target="#dt-time" data-toggle="datetimepicker">
            <i className="fa fa-clock-o"></i>
          </InputGroupText>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default TimeOnly;
