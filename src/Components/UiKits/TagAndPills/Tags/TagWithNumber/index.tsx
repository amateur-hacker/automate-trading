import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, TagsWithNumber } from "@/Constant";
import { TagsWithNumData } from "@/Data/UiKits/TagAndPills";
import { Badge, Card, CardBody, Col } from "reactstrap";

const TagWithNumber = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading={TagsWithNumber} />
        <CardBody className="digits">
          <Badge color="primary" href={Href}>
            1
          </Badge>
          {TagsWithNumData.map((element, index) => (
            <Badge key={index} color={element.color} href={Href}>
              {element.text}
            </Badge>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default TagWithNumber;
