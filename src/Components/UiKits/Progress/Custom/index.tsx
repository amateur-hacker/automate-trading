import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CustomHeightProgressBars } from "@/Constant";
import { CustomData, CustomProgressSubHeading } from "@/Data/UiKits/Progress";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

const Custom = () => {
  return (
    <Card>
      <CommonCardHeader subHeading={CustomProgressSubHeading} heading={CustomHeightProgressBars} />
      <CardBody className="progress-showcase">
        <Row>
          <Col>
            <Progress color="primary" value="25" className="xs-progress-bar" />
            {CustomData.map((element, index) => (
              <Progress key={index} value={element.value} color={element.color} className={element.name} />
            ))}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default Custom;
