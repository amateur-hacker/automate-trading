import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { PillsWithNumber } from "@/Constant";
import { TagsWithNumData } from "@/Data/UiKits/TagAndPills";
import { Badge, Card, CardBody, Col } from "reactstrap";

const PillWithNumber = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading={PillsWithNumber} />
        <CardBody className="digits">
          <Badge pill className=" rounded" color="primary">
            1
          </Badge>
          {TagsWithNumData.map((element, index) => (
            <Badge pill key={index} className=" rounded" color={element.color}>
              {element.text}
            </Badge>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillWithNumber;
