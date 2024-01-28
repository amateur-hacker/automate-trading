import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import SidebarContacts from "./SidebarContacts";

const Contacts = () => {
  return (
    <>
      <CommonBreadcrumb parent="Contact" pageTitle="Contact" />
      <Container fluid>
        <div className="email-wrap bookmark-wrap">
          <Row>
            <SidebarContacts />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Contacts;
