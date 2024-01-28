import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DatePickers } from "@/Constant";
import { Card, CardBody, Col, Container, Form, Row } from "reactstrap";
import DefaultDate from "./DefaultDate";
import { useState } from "react";
import DateWithTime from "./DateWithTime";
import TimeOnly from "./TimeOnly";
import CustomDate from "./CustomDate";
import TodayButtons from "./TodayButton";
import DisableWeekendsDay from "./DisableWeekendsDay";
import ChildDatepicker from "./ChildDatePicker";
import DisableDatePicker from "./DisableDatePicker";
import InlineDate from "./InlineDate";

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (date: Date) => {
    setStartDate(date);
  };
  return (
    <>
      <CommonBreadcrumb parent="Form Widgets" pageTitle="Datepicker" />
      <Container fluid>
        <Card>
          <CommonCardHeader heading={DatePickers} />
          <CardBody>
            <Row>
              <Col md="12">
                <div className="date-picker"></div>
                <Form className="theme-form">
                  <DefaultDate handleChange={handleChange} startDate={startDate} />
                  <DateWithTime handleChange={handleChange} startDate={startDate} />
                  <TimeOnly handleChange={handleChange} startDate={startDate} />
                  <CustomDate startDate={startDate} handleChange={handleChange} />
                  <TodayButtons startDate={startDate} handleChange={handleChange} />
                  <DisableWeekendsDay handleChange={handleChange} />
                  <ChildDatepicker />
                  <DisableDatePicker startDate={startDate} handleChange={handleChange} />
                  <InlineDate startDate={startDate} handleChange={handleChange} />
                </Form>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default DatePicker;
