import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Col, Container, Row } from "reactstrap";
import MailSidebar from "../Common/MailSidebar";
import MainMails from "./Mails";

const MailInbox = () => {
  return (
    <>
      <CommonBreadcrumb parent="Email" pageTitle="Mail Inbox" />
      <Container fluid>
        <div className="email-wrap">
          <Row>
            <Col xl="3" md="6" className="xl-30 box-col-3">
              <MailSidebar />
            </Col>
            <Col xl="9" md="12" className="xl-70 box-col-9">
              {/* <Mails /> */}
              <MainMails />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default MailInbox;
