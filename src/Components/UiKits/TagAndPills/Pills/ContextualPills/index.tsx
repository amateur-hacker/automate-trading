import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ContextualVariations, Primary } from "@/Constant";
import { ContextualBadgeData } from "@/Data/UiKits/TagAndPills";
import { Badge, Card, CardBody, Col } from "reactstrap";

const ContextualPills = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading={ContextualVariations} />
        <CardBody>
          <Badge pill className="rounded" color="primary">
            {Primary}
          </Badge>
          {ContextualBadgeData.map((element, index) => (
            <Badge pill className="rounded" key={index} color={element.color}>
              {element.text}
            </Badge>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContextualPills;
