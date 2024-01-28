import React from "react";
import { Col, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import DatePicker from "react-datepicker";
import { FormWidgetsDatePickerProps } from "@/Type/Form";

const DateOnly = ({ startDate, handleChange }: FormWidgetsDatePickerProps) => {
  return (
    <Row className="mb-3 g-3">
      <Col sm="3" className="col-form-label text-end">
        <Label>Date Only</Label>
      </Col>
      <Col xl="5" sm="7" lg="8">
        <InputGroup className="date" id="dt-minimum" data-target-input="nearest">
          <DatePicker className="form-control datetimepicker-input digits" selected={startDate} onChange={handleChange} dateFormat="MMMM d, yyyy h:mm aa" />
          <InputGroupText data-target="#dt-date" data-toggle="datetimepicker">
            <i className="fa fa-calendar"></i>
          </InputGroupText>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default DateOnly;
