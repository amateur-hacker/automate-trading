import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicCalendars } from "@/Constant";
import { EventsData } from "@/Data/Calendar";
import moment from "moment";
import { Calendar, View, Views, momentLocalizer } from "react-big-calendar";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

type CalendarView = View;
const BasicCalendar = () => {
  const allViews: CalendarView[] = Object.values(Views) as CalendarView[];
  const localizer = momentLocalizer(moment);

  return (
    <>
      <CommonBreadcrumb parent="Calendar" pageTitle="Calendar" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader heading={BasicCalendars} />
              <CardBody>
                <Calendar localizer={localizer} scrollToTime={new Date(1970, 1, 1, 6)} defaultDate={new Date(2023, 3, 12)} onSelectEvent={(event) => alert(event.title)} views={allViews} events={EventsData} selectable step={60} startAccessor="start" endAccessor="end" />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BasicCalendar;
