import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicProgressBars } from "@/Constant";
import { BasicData, BasicProgressSubHeading } from "@/Data/UiKits/Progress";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

const Basic = () => {
  return (
    <Card>
      <CommonCardHeader heading={BasicProgressBars} subHeading={BasicProgressSubHeading} />
      <CardBody className="progress-showcase ">
        <Row>
          <Col>
            <Progress value="0" />
            {BasicData.map((element, index) => (
              <Progress key={index} color={element.color} value={element.value} />
            ))}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default Basic;
