import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import Greeting from "./Greetings";
import NewsAndUpdates from "./NewsAndUpdate";
import OutgoingProject from "./OngoingProjects";
import RecentActivities from "./RecentActivity";
import DailyEarning from "./TodaysEarning";
import TotalTransactions from "./TotalTransaction";
import Yearly from "./YearlyChart";

const Default = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Default" parent="Dashboard" />
      <Container fluid>
        <div className="default-dash">
          <Row>
            <Greeting />
            <DailyEarning />
            <NewsAndUpdates />
            <OutgoingProject />
            <RecentActivities />
            <TotalTransactions />
            <Yearly />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Default;
