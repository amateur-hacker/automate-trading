import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SetStateAction, useState } from "react";
import { Card, CardBody, Col, Container, Form, Row } from "reactstrap";
import DateOnly from "./DateOnly";
import DisableDaysOfWeek from "./DisableDaysOfWeek";
import EnableAndDisableDates from "./EnableAndDisableDates";
import MinimumSetUp from "./MinimumSetup";
import NoIcon from "./NoIcon";
import TimeOnly from "./TimeOnly";
import UsingLocals from "./UsingLocals";
import ViewMode from "./ViewMode";

const DateTimePicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const handleChange = (date: SetStateAction<Date | null>) => {
    setStartDate(date);
  };
  return (
    <>
      <CommonBreadcrumb parent="Form Controls" pageTitle="Date Time" />
      <Container fluid>
        <Row>
          <Card>
            <CommonCardHeader heading="Date Time Picker" />
            <CardBody>
              <Row>
                <Col md="12">
                  <div className="datetime-picker">
                    <Form className="theme-form">
                      <MinimumSetUp handleChange={handleChange} startDate={startDate} />
                      <UsingLocals handleChange={handleChange} startDate={startDate} />
                      <TimeOnly handleChange={handleChange} startDate={startDate} />
                      <DateOnly handleChange={handleChange} startDate={startDate} />
                      <NoIcon handleChange={handleChange} startDate={startDate} />
                      <EnableAndDisableDates />
                      <ViewMode />
                      <DisableDaysOfWeek />
                    </Form>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default DateTimePicker;
