import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LargeProgressBars } from "@/Constant";
import { LargeData, LargeProgressSubHeading } from "@/Data/UiKits/Progress";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

const Large = () => {
  return (
    <Card>
      <CommonCardHeader subHeading={LargeProgressSubHeading} heading={LargeProgressBars} />
      <CardBody className="progress-showcase ">
        <Row>
          <Col>
            <Progress color="primary" value="25" className="lg-progress-bar" />
            {LargeData.map((element, index) => (
              <Progress key={index} value={element.value} color={element.color} className="lg-progress-bar" />
            ))}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default Large;
