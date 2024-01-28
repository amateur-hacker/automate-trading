import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import Sidebar from "../Common/Sidebar";
import JobApplyForm from "./JobApplyForm";

const ApplyJobs = () => {
  return (
    <>
      <CommonBreadcrumb parent="Job Search" pageTitle="Apply" />
      <Container fluid>
        <Row>
          <Sidebar />
          <JobApplyForm />
        </Row>
      </Container>
    </>
  );
};

export default ApplyJobs;
