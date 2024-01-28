import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SmallProgressBars } from "@/Constant";
import { SmallData, SmallProgressSubHeading } from "@/Data/UiKits/Progress";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

const Small = () => {
  return (
    <Card>
      <CommonCardHeader heading={SmallProgressBars} subHeading={SmallProgressSubHeading} />
      <CardBody className="progress-showcase ">
        <Row>
          <Col>
            <Progress value={25} color="bg-primary" className="sm-progress-bar" />
            {SmallData.map((element, index) => (
              <Progress key={index} value={element.value} color={element.color} className="sm-progress-bar" />
            ))}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default Small;
