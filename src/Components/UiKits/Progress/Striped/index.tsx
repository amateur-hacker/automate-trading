import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ProgressBarsStriped } from "@/Constant";
import { StripedData, StripedProgressSubHeading } from "@/Data/UiKits/Progress";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

const Striped = () => {
  return (
    <Card>
      <CommonCardHeader heading={ProgressBarsStriped} subHeading={StripedProgressSubHeading} />
      <CardBody className="progress-showcase ">
        <Row>
          <Col>
            <Progress color="primary" value="10" striped={true} />
            {StripedData.map((element, index) => (
              <Progress key={index} color={element.color} value={element.value} striped={true} />
            ))}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default Striped;
