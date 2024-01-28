import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, PillsWithIcon } from "@/Constant";
import { TagWithIconData } from "@/Data/UiKits/TagAndPills";
import { Mail } from "react-feather";
import { Badge, Card, CardBody, Col } from "reactstrap";

const PillWithIcon = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading={PillsWithIcon} />
        <CardBody>
          <Badge pill className=" rounded" color="primary" href={Href}>
            <Mail />
          </Badge>
          {TagWithIconData.map((element, index) => (
            <Badge pill className=" rounded" key={index} color={element.color} href={Href}>
              {element.icon}
            </Badge>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillWithIcon;
