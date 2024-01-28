import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import Sidebar from "../Common/Sidebar";
import MainListCards from "./MainListCards";

const ListView = () => {
  return (
    <>
      <CommonBreadcrumb parent="Job Search" pageTitle="List View" />
      <Container fluid>
        <Row>
          <Sidebar />
          <MainListCards />
        </Row>
      </Container>
    </>
  );
};

export default ListView;
