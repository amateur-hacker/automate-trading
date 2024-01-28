import { DateRange, MaxDate, MinDate, SpecificDateRange } from "@/Constant";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Col, FormGroup, Label, Row } from "reactstrap";

const ChildDatepicker = () => {
  const [startDate, setStartDate] = useState<any>(new Date());
  const endDate = new Date();
  const handleChange = (date: Date) => {
    setStartDate(date);
  };

  return (
    <FormGroup className="row">
      <Col sm="3" className="col-form-label text-end">
        <Label>{SpecificDateRange}</Label>
      </Col>
      <Col xl="5" sm="9">
        <Row className="min-date">
          <Col md="12" className="mb-2">
            <DatePicker className="form-control digits" selected={startDate} onChange={handleChange} minDate={startDate} maxDate={startDate.getDate() + 5} placeholderText="Select a date between today and 5 days in the future" />
          </Col>
          <Col md="12" sm="3" className="mb-2 col-form-label">
            <Label className="me-2">{MinDate}</Label>
            <DatePicker className="form-control digits" selected={startDate} onChange={handleChange} minDate={new Date()} placeholderText="Select a date after 5 days ago" />
          </Col>
          <Col md="12" sm="3" className="mb-2 col-form-label">
            <Label className="me-2">{MaxDate}</Label>
            <DatePicker className="form-control digits " selected={startDate} onChange={handleChange} maxDate={new Date()} placeholderText="Select a date after 5 days ago" />
          </Col>
          <Col md="12" sm="3" className="date-range col-form-label">
            <Label className="me-2">{DateRange}</Label>
            <DatePicker className="form-control digits" selected={startDate} onChange={handleChange} selectsStart startDate={startDate} endDate={endDate} />
            <DatePicker className="form-control digits mt-2" selected={endDate} onChange={handleChange} selectsEnd endDate={endDate} minDate={startDate} />
          </Col>
        </Row>
      </Col>
    </FormGroup>
  );
};
export default ChildDatepicker;
