import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { MultipleBars } from "@/Constant";
import { MultiBarsData, MultiBarsSubHeading } from "@/Data/UiKits/Progress";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

const MultiBars = () => {
  return (
    <Card>
      <CommonCardHeader heading={MultipleBars} subHeading={MultiBarsSubHeading} />
      <CardBody className="progress-showcase ">
        <Row>
          <Col>
            {MultiBarsData.map((element, index) => (
              <Progress key={index} multi>
                {element.data.map((element, index) => (
                  <Progress key={index} bar color={element.color} value={element.value} />
                ))}
              </Progress>
            ))}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default MultiBars;
