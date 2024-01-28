import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Col, Container, Row } from "reactstrap";
import MailSidebar from "../Common/MailSidebar";
import EmailContain from "../ReadEmail/EmailContain";

const ReadEmail = () => {
  return (
    <>
      <CommonBreadcrumb parent="Email" pageTitle="Read Email" />
      <Container fluid>
        <div className="email-wrap">
          <Row>
            <Col xl="3" md="6" className="xl-30 box-col-3">
              <MailSidebar />
            </Col>
            <Col xl="9" md="12" className="xl-70 box-col-9">
              <EmailContain />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default ReadEmail;
