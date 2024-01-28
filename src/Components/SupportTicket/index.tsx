import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SupportTicketSubHeading } from "@/Data/SupportTicket";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import TicketTable from "./TicketTable";
import Tickets from "./Tickets";

const SupportTicket = () => {
  return (
    <>
      <CommonBreadcrumb parent="Support Ticket" pageTitle="Support Ticket" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader heading="Support Ticket List" subHeading={SupportTicketSubHeading} />
              <CardBody>
                <Tickets />
                <TicketTable />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SupportTicket;
