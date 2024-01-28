import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ProgressBarsStates } from "@/Constant";
import { StatesData, StatesSubHeading } from "@/Data/UiKits/Progress";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

const States = () => {
  return (
    <Card>
      <CommonCardHeader heading={ProgressBarsStates} subHeading={StatesSubHeading} />
      <CardBody className="progress-showcase ">
        <Row>
          <Col>
            <Progress color="primary" value="25" />
            {StatesData.map((element, index) => (
              <Progress key={index} value={element.value} color={element.color} />
            ))}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default States;
