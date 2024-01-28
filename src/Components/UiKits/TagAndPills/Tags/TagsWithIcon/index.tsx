import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, TagsWithIcon } from "@/Constant";
import { TagWithIconData } from "@/Data/UiKits/TagAndPills";
import { Mail } from "react-feather";
import { Badge, Card, CardBody, Col } from "reactstrap";

const TagWithIcon = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading={TagsWithIcon} />
        <CardBody>
          <Badge color="primary" href={Href}>
            <Mail />
          </Badge>
          {TagWithIconData.map((element, index) => (
            <Badge key={index} color={element.color} href={Href}>
              {element.icon}
            </Badge>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default TagWithIcon;
