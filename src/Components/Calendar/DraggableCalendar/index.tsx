import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Dragging_Event } from "@/Constant";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import DragCalendar from "./DragCalendar";

const DraggableCalendar = () => {
  return (
    <>
      <CommonBreadcrumb parent="Calendar" pageTitle="Draggable Calendar" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader heading={Dragging_Event} />
              <CardBody>
                <div className="basic-calendar">
                  <Row>
                    <DragCalendar />
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default DraggableCalendar;
