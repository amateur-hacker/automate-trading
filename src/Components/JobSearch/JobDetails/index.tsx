import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import Sidebar from "../Common/Sidebar";
import Details from "./Details";

const JobDetails = () => {
  return (
    <>
      <CommonBreadcrumb parent="Job Search" pageTitle="Job Details" />
      <Container fluid>
        <Row>
          <Sidebar />
          <Details />
        </Row>
      </Container>
    </>
  );
};

export default JobDetails;
