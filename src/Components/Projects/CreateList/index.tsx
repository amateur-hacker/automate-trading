import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import MainForm from "./MainForm";

const CreateList = () => {
  return (
    <>
      <CommonBreadcrumb parent="Project" pageTitle="Create List" />
      <Container fluid>
        <Row>
          <MainForm />
        </Row>
      </Container>
    </>
  );
};

export default CreateList;
