import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DateRangePicker } from "@/Constant";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import FirstRowRangePicker from "./FirstRowRangePicker";
import SecondRowRangePicker from "./SecondRowRangePicker";
import ThirdRowRangePicker from "./ThirdRowRangePicker";

const DateRangepicker = () => {
  return (
    <>
      <CommonBreadcrumb parent="Form Widgets" pageTitle="Date Rangepicker" />
      <Container fluid>
        <Row>
          <Col>
            <Card>
              <CommonCardHeader heading={DateRangePicker} />
              <CardBody>
                <Row className="date-range-picker">
                  <FirstRowRangePicker />
                  <SecondRowRangePicker />
                  <ThirdRowRangePicker />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DateRangepicker;
