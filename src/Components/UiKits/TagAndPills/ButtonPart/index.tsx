import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BadgesAsPartButtons } from "@/Constant";
import { ButtonPartData } from "@/Data/UiKits/TagAndPills";
import { Mail } from "react-feather";
import { Badge, Button, Card, CardBody, Col } from "reactstrap";

const ButtonPart = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="height-equal">
        <CommonCardHeader heading={BadgesAsPartButtons} />
        <CardBody>
          <div className="mb-3">
            <Button color="primary">
              Messages
              <Badge pill className="rounded text-dark ms-2 " color="light">
                <Mail />
              </Badge>
            </Button>
          </div>
          {ButtonPartData.map((element, index) => (
            <div key={index} className="mb-3">
              <Button color={element.color}>
                {element.text}
                <Badge pill className="rounded text-dark ms-2 " color="light">
                  {element.icon}
                </Badge>
              </Button>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default ButtonPart;
