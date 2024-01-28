import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import Sidebar from "../Common/Sidebar";
import MainCardsView from "./MainCardsView";

const CardView = () => {
  return (
    <>
      <CommonBreadcrumb parent="Job Search" pageTitle="Card View" />
      <Container fluid>
        <Row>
          <Sidebar />
          <MainCardsView />
        </Row>
      </Container>
    </>
  );
};

export default CardView;
