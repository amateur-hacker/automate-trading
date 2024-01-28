import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ProgressBarsAnimated } from "@/Constant";
import { AnimatedData, AnimatedProgressSubHeading } from "@/Data/UiKits/Progress";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

const Animated = () => {
  return (
    <Card>
      <CommonCardHeader heading={ProgressBarsAnimated} subHeading={AnimatedProgressSubHeading} />
      <CardBody className="progress-showcase ">
        <Row>
          <Col>
            <Progress color="primary" value="10" animated={true} />
            {AnimatedData.map((element, index) => (
              <Progress key={index} color={element.color} value={element.value} animated={true} />
            ))}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default Animated;
