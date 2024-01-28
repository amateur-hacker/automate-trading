import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Card, CardBody, Col } from "reactstrap";
import CommonActivity from "./CommonActivity";

const ActivityLog = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading="Activity Log" />
        <CardBody>
          <div className="activity-log">
            <CommonActivity heading="Today" />
            <CommonActivity heading="25 December" />
            <CommonActivity heading="8 september" />
            <CommonActivity heading="6 June" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActivityLog;
